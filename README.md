# Desafio Técnico RPE

Garantir a qualidade das aplicações por meio de soluções inovadoras e testes rigorosos. O desafio está dividido em duas etapas: Frontend e Backend.

## Requisitos

- [Node.js](https://nodejs.org/en/)
- Visual Studio Code ou qualquer editor de texto
- Git

## Instalação

1. Clone o repositório
2. Acesse a pasta do projeto
3. Instale as dependências

```bash
git clone
cd Desafio_RPE
npm install
```

## Execução

1. Acesse a pasta do projeto
2. Execute o comando

```bash
npx cypress open
```
Após os passos acima, o Cypress será aberto e você poderá executar os testes na interface gráfica.

Caso queira rodar os testes de frontend e backend sem a interface gráfica, execute o comando:

```bash
npx cypress run
```
Somente os testes de frontend
    
```bash
npx cypress run --spec cypress/e2e/aut_api/*.cy.js
```

Somente os testes de backend

```bash
npx cypress run --spec "cypress/e2e/aut_front/**/*.cy.js"
```

## Planos de Teste e estrategias

Garantir que a aplicação esteja funcionando corretamente de acordo com a documentação do projeto.

### Estratégias de Teste

- Teste de Interface
- Teste de API

### Planos de Teste

- Teste de Interface
  - Testar a funcionalidade de login
  - Testar a funcionalidade de cadastro de cliente
  - Testar a funcionalidade de cadastro de uma transação

- Teste de API
    - Testar a funcionalidade do endpoint de usuários


1. Teste de Interface
    - Testar a funcionalidade de login
        - Cenário 1: Autenticação realizada com sucesso
        - Cenário 2: Autenticação realizada com falha - Usuario invalido
        - Cenário 3: Autenticação realizada com falha - Usuario em branco

    - Testar a funcionalidade de cadastro de cliente
        - Cenário 1: Cadastro de cliente com sucesso
        - Cenário 2: Cadastro de cliente sem cpf
        - Cenário 3: Cadastro de cliente com cpf inválido
        - Cenário 4: Cadastro de cliente sem informar nome
        - Cenário 5: Cadastro de cliente sem informar dados


    - Testar a funcionalidade de cadastro de uma transação
        - Cenário 1: Cadastro de transação com sucesso
        - Cenaŕio 2: Cadastro de transação com valor acima do permitido


2. Teste de API
    - Testar a funcionalidade do endpoint de usuários - GET
        - Cenário 1: Listar todos os usuários por paginação
        - Cenário 2: Listar um usuário específico
        - Cenário 3: Listar um usuário inexistente
    
    - Testar a funcionalidade do endpoint de usuários - POST
        - Cenário 1: Cadastrar um usuário com sucesso
    
    - Testar a funcionalidade do endpoint de usuários - PUT
        - Cenário 1: Atualizar um usuário com sucesso

    - Testar a funcionalidade do endpoint de usuários - DELETE
        - Cenário 1: Deletar um usuário com sucesso

    - Testar a funcionalidade do endpoint de usuários - PATCH
        - Cenário 1: Atualizar um usuário com sucesso
    
## Resumo da execução dos testes

Testes de Interface: total de 10 testes     
Teste de API: total de 7 testes    
Dados os cenarios de teste descritos acima, foram realizados um total de 17 testes automatizados, onde 14 testes passaram com sucesso e 3 testes falharam.

## Bugs encontrados

### Teste de Interface

- Teste de cadastro de cliente com cpf inválido: Está sendo permitido o cadastro de um cliente com cpf inválido
- Teste de cadastro de cliente sem informar dados: Está sendo permitido o cadastro de um cliente sem informar os dados obrigatórios
- Teste de cadastro de transação com valor acima do permitido: Está sendo permitido o cadastro de uma transação com valor acima do permitido

## Melhorias

Teste de cadastro de cliente: Impedir o cadastro de cliente com cpf ja cadastrado    
Teste de Cadastro de cliente: Saldo está sendo exibido como double, melhorar a exibição para duas casas decimais    
Teste de Cadastro de cliente: Verificar uma quantidade minima de caracteres para o campo nome    

Teste de listagem de clientes: Inserir dia na data de validade para listagem de clientes    

Teste de listagem de transações: Inserir uma validação para obrigação de informar um valor    
Teste de listagem de transações: Informar o saldo do cliente após a escolha do mesmo    


## Autor

- LinkedIn: [LinkedIn](https://www.linkedin.com/in/leocfreire/)
- GitHub: [@LeoFreiree](https://github.com/LeoFreiree)
- Email: [Email](mailto:lcastrofreire@gmail.com)
- Telefone: +55 21 98766-8127
