import * as loginComponent from '../../components/login/login.comp'

export const verifyInvalidLoginMessage = () => {
    loginComponent.getForm().get('section').first()
    .should('contain.text', 'Credenciais inválidas')
}