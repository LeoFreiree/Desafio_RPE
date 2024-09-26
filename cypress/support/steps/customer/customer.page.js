import * as customerPage from '../../../page-actions/customer/customer.page'
import { getRandomName, getCpf } from '../../../utils/utils'

Cypress.Commands.add('addActiveCustomerOnForm', saldo => {
    const name = getRandomName(6)
    const cpf = getCpf()
    customerPage.setName(name)
    customerPage.setCpf(cpf)
    customerPage.setSaldo(saldo)
})

Cypress.Commands.add('clickActionOnFormAction', op => {
    customerPage.clickActionOnFormAction(op)
})