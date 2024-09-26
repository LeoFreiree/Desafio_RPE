import * as customerComponent from '../../components/customer/customer.comp'

export const verifySucessMessage = () => customerComponent.getMessage().should('be.visible').and('contain.text', 'Cliente salvo com sucesso')
export const validateRequiredFields = field => customerComponent.getForm().get('.control-label').contains(field).parent().within(() => {
    cy.get('small').should('be.visible').and('contain.text', 'Campo Obrigatório')
})
export const validateSucessRequiredFields = field => customerComponent.getForm().get('.control-label').contains(field).parent().within(() => {
    cy.get('small').should('not.be.visible').and('contain.text', 'Campo Obrigatório')
})