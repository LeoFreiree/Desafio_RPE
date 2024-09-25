export const getLogin = () => cy.get('label').contains('Login').next()
export const getPassword = () => cy.get('label').contains('Password').next()
export const getSubmit = () => cy.get('button').contains('Sign in')
