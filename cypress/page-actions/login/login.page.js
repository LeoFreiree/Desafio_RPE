import * as loginComponent from '../../components/login/login.comp'

export const setLogin = login => loginComponent.getLogin().typeAndLog(login)
export const setPassword = password => loginComponent.getPassword().typeAndLog(password)
export const clickOnSubmit = () => loginComponent.getSubmit().clickAndLog()