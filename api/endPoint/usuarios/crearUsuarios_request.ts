import { APIResponse } from "playwright";
import { manager } from "../../commons/commons_hooks";

export default class PostCrearUsuarios {
    async sendRequest(requestBody: string): Promise<APIResponse> {
        const Consult = await manager.getContext();
        return await Consult.post(`users`, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: requestBody,
        });
    }
}