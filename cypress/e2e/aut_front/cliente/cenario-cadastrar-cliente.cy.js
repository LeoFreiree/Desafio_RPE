import * as customerAsserts from '../../../asserts/customer/customer.assert'
import * as customerPage from '../../../page-actions/customer/customer.page'
import { getRandomName, getCpf } from '../../../utils/utils'

describe('Realizando testes de cadastro de cliente', () => {

context('Cadastro realizado com sucesso', () => {

    beforeEach(() => {
      cy.newStep('Acessando a página de login')
      cy.visit(Cypress.env('baseUrl'))
      cy.newStep('Inserindo as credenciais de login')
      const user = Cypress.env('usuarioValido')      
      cy.realizarLogin(user.login, user.senha)
      cy.verificarRedirecionamentoTelaInicio()
    })

  it('Usuario realiza um cadastro de paciente - TODOS OS CAMPOS', () => {

    //Alterar conforme necessario o valor do saldo do cliente a ser cadastrado
    const saldo = '100.00'

    cy.newStep('Selecionando a opção de cadastro de cliente')
    cy.selectAddCustomerOnNav()

    cy.newStep('Preenchendo os campos de cadastro de cliente')
    cy.addActiveCustomerOnForm(saldo)

    cy.newStep('Clicando no botão de salvar')
    cy.clickActionOnFormAction('Salvar')
    customerAsserts.verifySucessMessage()
    
  })

})

context('Cadastro realizado com falha', () => {
  
    beforeEach(() => {
      cy.newStep('Acessando a página de login')
      cy.visit(Cypress.env('baseUrl'))
      cy.newStep('Inserindo as credenciais de login')
      const user = Cypress.env('usuarioValido')      
      cy.realizarLogin(user.login, user.senha)
      cy.verificarRedirecionamentoTelaInicio()
    })

    it('Usuario realiza um cadastro de paciente - SEM INFORMAR CPF', () => {
 
        //Gerando um nome e cpf válido
        const name = getRandomName(6)
        const cpf = getCpf()
        //Alterar conforme necessario o valor do saldo do cliente a ser cadastrado
        const saldo = '100.00'
    
        cy.newStep('Selecionando a opção de cadastro de cliente')
        cy.selectAddCustomerOnNav()
    
        cy.newStep('Preenchendo os campos de cadastro de cliente')
        customerPage.setName(name)
        customerPage.setSaldo(saldo)
    
        cy.newStep('Clicando no botão de salvar')
        cy.clickActionOnFormAction('Salvar')

        cy.newStep('Valindando campos obrigatórios')
        customerAsserts.validateRequiredFields('CPF')
        
      })

    it('Usuario realiza um cadstro de paciente - INFORMANDO CPF INVÁLIDO', () => {
    
          //Gerando um nome válido
          const name = getRandomName(6)
          //Alterar conforme necessario o valor do saldo do cliente a ser cadastrado
          const saldo = '100.00'
      
          cy.newStep('Selecionando a opção de cadastro de cliente')
          cy.selectAddCustomerOnNav()
      
          cy.newStep('Preenchendo os campos de cadastro de cliente')
          customerPage.setName(name)
          customerPage.setCpf('12345678901')
          customerPage.setSaldo(saldo)
      
          cy.newStep('Clicando no botão de salvar')
          cy.clickActionOnFormAction('Salvar')
    
          cy.newStep('Valindando campos obrigatórios')
          customerAsserts.validateRequiredFields('CPF') 
    })

    it('Usuario realiza um cadastro de paciente - SEM INFORMAR NOME', () => {
                                              
        //Gerando um cpf válido
        const cpf = getCpf()
        //Alterar conforme necessario o valor do saldo do cliente a ser cadastrado
        const saldo = '100.00'
    
        cy.newStep('Selecionando a opção de cadastro de cliente')
        cy.selectAddCustomerOnNav()
    
        cy.newStep('Preenchendo os campos de cadastro de cliente')
        customerPage.setCpf(cpf)
        customerPage.setSaldo(saldo)
    
        cy.newStep('Clicando no botão de salvar')
        cy.clickActionOnFormAction('Salvar')
  
        cy.newStep('Valindando campos obrigatórios')
        customerAsserts.validateRequiredFields('Nome')
      })

    it('Usuario realiza um cadastro de paciente - SEM INFORMAR DADOS', () => {
  
      cy.newStep('Selecionando a opção de cadastro de cliente')
      cy.selectAddCustomerOnNav()
  
      cy.newStep('Clicando no botão de salvar')
      cy.clickActionOnFormAction('Salvar')

     cy.newStep('Valindando campos obrigatórios')
      customerAsserts.validateRequiredFields('Nome')
      customerAsserts.validateRequiredFields('CPF')
      customerAsserts.validateRequiredFields('Saldo Disponível')
    })
  })


})