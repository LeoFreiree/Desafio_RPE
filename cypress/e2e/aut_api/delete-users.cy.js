import { getRandomName} from '../../utils/utils'

describe('Realizando testes de Api - api/users', () => {

context('DELETE - Deletando o cadastro de usuarios', () => {

    beforeEach(() => {

    })

  it('Removendo um registro no cadastro de Usuario', () => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('baseApiUrl')}/users/2`
    }).then((response) => {
      cy.log(JSON.stringify(response.body))
      // Validar o status da resposta
      expect(response.status).to.eq(204)
            // Validar que o corpo da resposta está vazio
      expect(response.body).to.be.empty
    })
  })
    
})
})

