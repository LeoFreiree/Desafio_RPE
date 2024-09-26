import * as saleComponent from '../../components/sale/sale.comp'

export const verifySucessMessage = () => saleComponent.getMessage().should('be.visible').and('contain.text', 'Venda realizada com sucesso')
export const verifyNoSucessMessage = () => saleComponent.getMessage().should('none')
export const verifyTitle = () => saleComponent.getTitle().should('be.visible').and('contain.text', 'Incluir Transacao')