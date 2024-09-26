import * as homeComponent from '../../components/home/home.comp'

export const selectNav = op => homeComponent.getNav().contains(op).hoverAndLog()
export const clickNav = op => homeComponent.getNav().contains(op).clickAndLog()