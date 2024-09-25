import * as homeComponent from '../../components/home/home.comp'

export const verifyHome = () => homeComponent.getTitle().should('be.visible').and('contain.text', 'Bem vindo ao Desafio')