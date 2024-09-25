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
})