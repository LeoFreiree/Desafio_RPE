describe('Realizando testes de login', () => {

  context('Login realizado com sucesso', () => {

    beforeEach(() => {
      cy.newStep('Acessando a página de login')
      cy.visit(Cypress.env('baseUrl'))
    })

  it('Autenticação realizada com sucesso', () => {
    cy.newStep('Inserindo as credenciais de login')
    cy.get('label').contains('Login').next().typeAndLog('admin')
  })
})
})