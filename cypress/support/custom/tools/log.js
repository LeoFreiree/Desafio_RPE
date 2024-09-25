Cypress.Commands.add('newStep', stepDescription => {
    cy.log(`Etapa: ${stepDescription}`);
})