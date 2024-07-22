import {
  Before, BeforeAll, AfterAll, Given, After, Status,
} from '@cucumber/cucumber';
import PlaywrightManager from './playwright_manager';
import Database from './database_manager';

export const manager = new PlaywrightManager();
let mainURL = '';
export const db = new Database();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Before({ tags: '@ignore' }, async () => 'skipped' as any);

Before({ tags: '@tiempoLibre' }, async () => {
  mainURL = 'https://api.thedogapi.com/v1/';
  await manager.initialize("chrome", mainURL);
});

Before({ tags: '@especifico' }, async () => {
  mainURL = 'https://api.thedogapi.com/v1/breeds/';
  await manager.initialize("chrome", mainURL);
});

Before({ tags: '@usuarios' }, async () => {
  mainURL = 'https://reqres.in/api/';
  await manager.initialize("chrome", mainURL);
});

Given('abre la pagina {string}', async (string) => {
  await manager.navigate(string);
});
BeforeAll(async () => {
  // TODO
});
// eslint-disable-next-line func-names
After(async function (Scenario) {
  if (Scenario.result?.status === Status.FAILED) {
    const screenshotRoute: string = await manager.screenshot(`./report/${Scenario.pickle.id}.png`);
    this.attach(screenshotRoute, 'image/png');
  }
  await manager.close();
});
AfterAll(async () => {
  await manager.close();
  await db.closeConnection();
});


