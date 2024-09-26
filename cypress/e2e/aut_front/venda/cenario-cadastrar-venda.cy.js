import * as salePage from '../../../page-actions/sale/sale.page'
import * as saleAsserts from '../../../asserts/sale/sale.assert'
import * as customerAsserts from '../../../asserts/customer/customer.assert'
import { getRandomName, getCpf } from '../../../utils/utils'

describe('Realizando testes de cadastro de transação', () => {

context('Cadastro de transação realizado com sucesso', () => {

    beforeEach(() => {
      cy.newStep('Acessando a página de login')
      cy.visit(Cypress.env('baseUrl'))
      cy.newStep('Inserindo as credenciais de login')
      const user = Cypress.env('usuarioValido')      
      cy.realizarLogin(user.login, user.senha)
      cy.verificarRedirecionamentoTelaInicio()
    })

  it('Usuario realiza um cadastro de vendas', () => {

    //Alterar conforme necessario o valor do saldo do cliente a ser cadastrado
    const saldo = '100.00'
    const valorTransacao = '10.00'
    
    //Realizando um cadastro de cliente para realizar a venda
    cy.newStep('Selecionando a opção de cadastro de cliente')
    cy.selectAddCustomerOnNav()

    cy.newStep('Preenchendo os campos de cadastro de cliente')
    cy.addActiveCustomerOnForm(saldo).then((customerName) => {
      cy.wrap(customerName).as('customerName');
    })

    cy.newStep('Clicando no botão de salvar')
    cy.clickActionOnFormAction('Salvar')
    customerAsserts.verifySucessMessage()

    //Realizando um cadastro de venda do cliente cadastrado
    cy.newStep('Selecionando a opção de vendas')
    cy.selectAddSaleOnNav()

    cy.newStep('Selecionando o cliente para realizar a venda')
    cy.get('@customerName').then((customerName) => {
      cy.newStep('Selecionando o cliente para realizar a venda')
      salePage.selectClient(customerName);
    })
    salePage.seTransactionValue(valorTransacao)
    salePage.clickActionOnFormAction('Salvar')
    saleAsserts.verifySucessMessage()
    
  })
})

context('Cadastro de transação não realizada', () => {

  beforeEach(() => {
    cy.newStep('Acessando a página de login')
    cy.visit(Cypress.env('baseUrl'))
    cy.newStep('Inserindo as credenciais de login')
    const user = Cypress.env('usuarioValido')      
    cy.realizarLogin(user.login, user.senha)
    cy.verificarRedirecionamentoTelaInicio()
  })

  it('Usuario realiza um cadastro de vendas informando um valor acima da margem do cliente', () => {

      const saldo = '100.00'
      const valorTransacao = '300.00'

      //Realizando um cadastro de cliente para realizar a venda
    cy.newStep('Selecionando a opção de cadastro de cliente')
    cy.selectAddCustomerOnNav()

    cy.newStep('Preenchendo os campos de cadastro de cliente')
    cy.addActiveCustomerOnForm(saldo).then((customerName) => {
      cy.wrap(customerName).as('customerName');
    })

    cy.newStep('Clicando no botão de salvar')
    cy.clickActionOnFormAction('Salvar')
    customerAsserts.verifySucessMessage()
      
      cy.intercept('POST', '/desafioqa/incluirVenda').as('incluirVenda')

      //Realizando um cadastro de venda
      cy.newStep('Selecionando a opção de vendas')
      cy.selectAddSaleOnNav()
  
      cy.get('@customerName').then((customerName) => {
        cy.newStep('Selecionando o cliente para realizar a venda')
        salePage.selectClient(customerName);
      })
      salePage.seTransactionValue(valorTransacao)
      salePage.clickActionOnFormAction('Salvar')
      cy.wait('@incluirVenda').should('not.exist')
  })
})
})