Feature: Consultar razas especificas

  @todas @especifico
  Scenario Outline: Concultar una raza en especifico
    Given que configuro el cuerpo de la solicitud para esta prueba
    When envío una solicitud GET para consultar una raza en especifico de perros <id>
    Then el estado de la respuesta para este caso debe ser <statusCode>

    Examples:
      | id | statusCode |
      | 8  | 200        |
