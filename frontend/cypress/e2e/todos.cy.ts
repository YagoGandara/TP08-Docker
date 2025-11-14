describe('Todos App - E2E', () => {
  it('Carga la home y muestra el listado', () => {
    cy.visit('/');

    // Ajustá estos selectores/textos según tu UI real
    cy.contains(/todo/i);
  });

  it('Permite crear un TODO (si tu UI lo soporta)', () => {
    cy.visit('/');

    // EJEMPLO genérico - adaptá nombres de inputs y botones
    cy.get('input[formcontrolname="title"]').type('Todo E2E Cypress');
    cy.get('button[type="submit"]').click();

    cy.contains('Todo E2E Cypress');
  });
});
