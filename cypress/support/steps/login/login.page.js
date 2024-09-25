import * as Login from '../../../page-actions/login/login.page'

Cypress.Commands.add('realizarLogin', (username, password) => {
    Login.setLogin(username)
    Login.setPassword(password)
    Login.clickOnSubmit()
    })
