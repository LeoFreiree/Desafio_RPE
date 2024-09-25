import * as homeAsserts from '../../../asserts/home/home.assert'

Cypress.Commands.add('verificarRedirecionamentoTelaInicio', () => {
    cy.url().should('include', '/inicio') 
    homeAsserts.verifyHome()
})