import { getRandomName} from '../../utils/utils'

describe('Realizando testes de Api - api/users', () => {
  before(() => {
    cy.fixture('userFields.json').then((users) => {
      const user = users.requiredFields

      user['name'] = `Teste ${getRandomName(6)}`

      cy.wrap(user).as('user')
    })
  })

context('PUT - Alterando o cadastro de usuarios', () => {

  it('Realizando uma alteração no cadastro de Usuario', () => {
    cy.get('@user').then((user) => {
    cy.request({
      method: 'PUT',
      url: `${Cypress.env('baseApiUrl')}/users/2`,
      body: {
        "name": user.name,
        "job":  user.job
      }
    }).then((response) => {
      cy.log(JSON.stringify(response.body))
      // Validar o status da resposta
      expect(response.status).to.eq(200)
            // Validar que o corpo da resposta não está vazio
      expect(response.body).to.not.be.empty
      expect(response.body).to.have.property('name').and.to.not.be.empty;
      expect(response.body).to.have.property('job').and.to.not.be.empty;
      expect(response.body).to.have.property('updatedAt').and.to.not.be.empty;
    })
  })
})
    
})
})

