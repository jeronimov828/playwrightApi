Feature: Consultar todos los usuarios existentes

    @todas @usuarios
    Scenario Outline: Consultar usuarios
        Given que configuro el cuerpo de la solicitud para consultar usuarios
        When envío una solicitud GET para consultar los usuarios
        Then el estado de la respuesta del api de los usuarios debe ser <statusCode>

        Examples:
            | statusCode |
            | 200        |