import { Given, When, Then } from '@cucumber/cucumber';
import { APIResponse, expect } from '@playwright/test';
import GetToasRazasPerros_request from '../endPoint/consultarRazas/consultarTodasLasRazas_request';

let requestApi: APIResponse;

Given('que configuro el cuerpo de la solicitud', () => {
    console.log(`Given: Configurando solicitud GET de consulta de razas de perros`);
});

When('envío una solicitud GET para consultar las razas de los perros', async () => {
    console.log(`When: Enviando solicitud GET para obtener las razas`);
    const getConsultarTodasLasRzas = new GetToasRazasPerros_request();
    requestApi = await getConsultarTodasLasRzas.sendRequest();
})

Then('el estado de la respuesta debe ser {int}', async (statusCode: number) => {
    console.log("Validando status:", requestApi.status());
    expect(requestApi.status()).toBe(statusCode);

    const responseBody = await requestApi.json();
    console.log("Cuerpo de la Respuesta:", responseBody);
});