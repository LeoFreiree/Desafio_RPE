import * as saleComponent from '../../components/sale/sale.comp'

export const selectClient = client => saleComponent.getClient().selectAndLog(client)
export const seTransactionValue = value => saleComponent.transactionValue().typeAndLog(value)
export const clickActionOnFormAction = op => saleComponent.getFormActions().contains('button', op).clickAndLog()