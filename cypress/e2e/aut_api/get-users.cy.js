
describe('Realizando testes de Api - api/users', () => {

context('GET - busca de usuarios', () => {

    beforeEach(() => {

    })

  it('Busca uma lista de usuario por pagina', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('baseApiUrl')}/users?page=2`
    }).then((response) => {
      cy.log(JSON.stringify(response.body))
      // Validar o status da resposta
      expect(response.status).to.eq(200)
            // Validar que o corpo da resposta não está vazio
      expect(response.body).to.not.be.empty
    })
    
})

it('Busca um usuario especifico com base na lista de usuario', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('baseApiUrl')}/users/2`
    }).then((response) => {
      cy.log(JSON.stringify(response.body))
      // Validar o status da resposta
      expect(response.status).to.eq(200)
            // Validar que o corpo da resposta não está vazio
      expect(response.body).to.not.be.empty
    })

})

it('Busca um usuario que não existe na lista', () => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('baseApiUrl')}/users/23`,
    failOnStatusCode: false
  }).then((response) => {
    // Validar o status da resposta
    expect(response.status).to.eq(404)
  })
})
})
})

