import { APIResponse } from 'playwright';
import { manager } from '../../commons/commons_hooks';


export default class GetRazasPerros_request {
    async sendRequest(id: number): Promise<APIResponse> {
        const Consult = await manager.getContext();
        return await Consult.get(`${id}`);
    }
}
