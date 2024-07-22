import { APIResponse } from 'playwright';
import { manager } from '../../commons/commons_hooks';


export default class GetToasRazasPerros_request {
    async sendRequest(): Promise<APIResponse> {
        const Consult = await manager.getContext();
        return await Consult.get(`breeds`);
    }
}
