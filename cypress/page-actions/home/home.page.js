import * as homeComponent from '../../components/home/home.comp'

export const selectNav = op => cy.contains('span', op).hoverAndLog()
export const selectNav_ = op => homeComponent.getNav().contains(op).hoverAndLog()
export const clickNav = () => cy.get('a[title="Incluir"] > span.menu-item-parent').clickAndLog()
export const clickSaleNav = op => cy.get('a[title="Dashboard"] > span.menu-item-parent').contains(op).clickAndLog()