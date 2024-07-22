import pg from 'pg-promise';
import { IConnectionParameters } from 'pg-promise/typescript/pg-subset';
import * as dotenv from 'dotenv';

export default class Database {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any;

  connection: IConnectionParameters;

  pgp = pg();

  constructor() { // TODO Variables de ambiente
    dotenv.config();
    this.connection = {
      host: process.env.POSTGRES_HOST,
      port: process.env.PG_PORT ? parseInt(process.env.PG_PORT, 10) : 5434,
      database: process.env.POSTGRES_DATABASE,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASS,
      lock_timeout: 1000,
    };
    this.db = this.pgp(this.connection);
  }

  async getEventosByUnidadAndFechaHoraEvento(reqId:string) {
    try {
      const eventos = await this.db.any('SELECT * FROM public.evento_tracking WHERE req_id = $1', [reqId]);
      return eventos;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching eventos:', error);
      throw error;
    }
  }

  async deleteEventosByUnidad(unidad:string) {
    try {
      await this.db.none('DELETE FROM public.evento_tracking WHERE unidad = $1', [unidad]);
      await this.db.none('DELETE FROM public.estado_unidad WHERE unidad = $1', [unidad]);
      await this.db.none('DELETE FROM public.historico_estado_unidad WHERE unidad = $1', [unidad]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error deleting eventos:', error);
      throw error;
    }
  }

  async closeConnection(): Promise<void> {
    await this.pgp.end();
  }
}

