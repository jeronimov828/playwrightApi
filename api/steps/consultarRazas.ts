import { Given, When, Then } from '@cucumber/cucumber';
import { APIResponse, expect } from '@playwright/test';
import GetRazasPerros_request from '../endPoint/consultarRazas/consultarRazas_request';

let requestApi: APIResponse;

Given('que configuro el cuerpo de la solicitud para esta prueba', () => {
    console.log(`Given: Configurando solicitud GET de consulta de razas de perros`);
});

When('envío una solicitud GET para consultar una raza en especifico de perros {int}', async (id: number) => {
    console.log(`When: Enviando solicitud GET para obtener las razas`);
    const getConsultarRazas = new GetRazasPerros_request();
    requestApi = await getConsultarRazas.sendRequest(id);
});

Then('el estado de la respuesta para este caso debe ser {int}', async (statusCode: number) => {
    console.log("Validando status:", requestApi.status());
    expect(requestApi.status()).toBe(statusCode);
});