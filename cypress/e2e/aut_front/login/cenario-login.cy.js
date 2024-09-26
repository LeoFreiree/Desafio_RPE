import * as loginAsserts from '../../../asserts/login/login.assert'

describe('Realizando testes de login', () => {

  context('Login realizado com sucesso', () => {

    beforeEach(() => {
      cy.newStep('Acessando a página de login')
      cy.visit(Cypress.env('baseUrl'))
    })

  it('Autenticação realizada com sucesso', () => {
    const user = Cypress.env('usuarioValido')
    
    cy.newStep('Inserindo as credenciais de login')
    cy.realizarLogin(user.login, user.senha)

    cy.newStep('Verificando redirecionamento para a tela de início')
    cy.verificarRedirecionamentoTelaInicio()
  })

})

context('Login realizado com falha', () => {
  
    beforeEach(() => {
      cy.newStep('Acessando a página de login')
      cy.visit(Cypress.env('baseUrl'))
    })
  
    it('Autenticação realizada com falha - Usuario invalido', () => {
      const user = Cypress.env('usuarioInvalido')
  
      cy.newStep('Inserindo as credenciais de login')
      cy.realizarLogin(user.login, user.senha)
  
      cy.newStep('Verificando mensagem de erro')
      loginAsserts.verifyInvalidLoginMessage()
    })

    it('Autenticação realizada com falha - Usuario em branco', () => {
  
      cy.newStep('Inserindo as credenciais de login')
      cy.clickOnsubmit()
  
      cy.newStep('Verificando mensagem de erro')
      loginAsserts.verifyInvalidLoginMessage()
    })
  })

})