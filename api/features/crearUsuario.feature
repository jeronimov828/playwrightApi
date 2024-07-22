Feature: Crear un nuevo usuario

    @todas @usuarios
    Scenario Outline: Crear usuario desde cero
        Given que configuro el cuerpo de la solicitud para crear usuarios
        When envío una solicitud POST para crear usuarios
        Then el estado de la respuesta del api para crear los usuarios debe ser <statusCode>

        Examples:
            | statusCode |
            | 200        |