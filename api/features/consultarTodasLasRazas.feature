Feature: Consultar todas las razas

    @todas @tiempoLibre
    Scenario Outline: Consultar razas
        Given que configuro el cuerpo de la solicitud
        When envío una solicitud GET para consultar las razas de los perros
        Then el estado de la respuesta debe ser <statusCode>

        Examples:
            | statusCode |
            | 200        |