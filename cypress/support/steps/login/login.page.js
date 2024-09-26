import * as Login from '../../../page-actions/login/login.page'

Cypress.Commands.add('realizarLogin', (username, password) => {
    Login.setLogin(username)
    Login.setPassword(password)
    Login.clickOnSubmit()
    })

Cypress.Commands.add('clickOnsubmit', () => {
    Login.clickOnSubmit()
    })

    //Realiza o login rápido e de maneira simples setanto  diretamente a informação necessária para o mesmo
Cypress.Commands.add('carregarPaginaLogada', cookie => {
    cy.setCookie('JSESSIONID', cookie)
      cy.visit(Cypress.env('homeUrl'))
})


