import * as homeAsserts from '../../../asserts/home/home.assert'
import * as Home from '../../../page-actions/home/home.page'

Cypress.Commands.add('verificarRedirecionamentoTelaInicio', () => {
    cy.url().should('include', '/inicio') 
    homeAsserts.verifyHome()
})

Cypress.Commands.add('selectAddCustomerOnNav', () => {
    Home.selectNav('QA')
    Home.selectNav('Clientes')
    Home.clickNav('Incluir')
})

Cypress.Commands.add('selectAddSaleOnNav', () => {
    Home.selectNav('QA')
    Home.selectNav('Transações')
    Home.clickSaleNav('Incluir')
})