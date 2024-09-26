import * as customerComponent from '../../components/customer/customer.comp'

export const setName = name => customerComponent.getName().typeAndLog(`Teste ${name}`)
export const setCpf = cpf => customerComponent.getCpf().typeAndLog(cpf)
export const setSaldo = saldo => customerComponent.getSaldo().typeAndLog(saldo)
export const clickActionOnFormAction = op => customerComponent.getFormActions().contains('button', op).clickAndLog()
