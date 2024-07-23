import { Given, When, Then } from '@cucumber/cucumber';
import { APIResponse, expect } from '@playwright/test';
import PostCrearUsuarios from '../endPoint/usuarios/crearUsuarios_request';
import { BodyPostCrearUsuarios } from '../endPoint/usuarios/crearUsuarios_body';

let requestApi: APIResponse;
let requestBody: string;

Given('que configuro el cuerpo de la solicitud para crear usuarios', () => {
    console.log(`Given: Configurando solicitud para crear el usuario`);
    const factorDeConversion = new BodyPostCrearUsuarios();
    requestBody = factorDeConversion.toJSON();
});

When('envío una solicitud POST para crear usuarios', async () => {
    console.log(`When: Enviando solicitud POST para la creacion del usuario`);
    const postFactorDeConversion = new PostCrearUsuarios();
    requestApi = await postFactorDeConversion.sendRequest(requestBody);
});

Then('el estado de la respuesta del api para crear los usuarios debe ser {int}', async (statusCode: number) => {
    console.log(`Then: Verificando StatusCode: ${statusCode}`);
    expect(requestApi.status()).toBe(statusCode);
});