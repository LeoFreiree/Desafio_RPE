import { removeAccents } from '../../../utils/utils'

Cypress.Commands.add('clickAndLog', { prevSubject: 'element' }, (subject, options) => {

    if( options && options.scrollIntoView){
        cy.wrap(subject).scrollIntoView()
    }

        if(options && options.real){
            cy.wrap(subject).realClick()
        }else{
            cy.wrap(subject).click(options)
        }
    }
)

Cypress.Commands.add('typeAndLog', { prevSubject: 'element' }, (subject, text, options) => {
    const content = options && options.sensitive ? '*'.repeat(text.length) : text

    if( options && options.scrollIntoView){
        cy.wrap(subject).scrollIntoView()
    }

        if(options && options.real){
            cy.wrap(subject).realType(removeAccents(content), options)
        }else{
            cy.wrap(subject).type(content, options)
        }
    }
)

Cypress.Commands.add('pressAndLog', { prevSubject: 'element' }, (subject, key) => {
    const selector = subject[0].localName
    
    if(selector != 'body'){
        selector ?
            cy.addContext(`pressing "${key}" on element located at "${selector}"`):
            cy.addContext(`pressing "${key}"`)

        cy.wrap(subject).realPress(key)
    }
})

Cypress.Commands.add('selectAndLog', { prevSubject: 'element' }, (subject, content, options) => {
    const selector = subject[0].localName
    const item = typeof content == "number" ? `${content}º`: content
    const name = options && options.name ? `on "${options.name}" element` : ""
    
    if( options && options.scrollIntoView){
        cy.wrap(subject).scrollIntoView()
    }

    if(selector != 'body'){
        selector ?
            cy.addContext(`selecting "${item}" option ${name} located at "${selector}"`):
            cy.addContext(`selecting "${item}" option ${name}`)

        if(options && options.noSensitive){
            cy.wrap(subject)
                .contains(content, {matchCase: false})
                .invoke('text')
                .then(optionText => {
                    cy.wrap(subject).select(optionText, options)
                })
        }
        else{
            cy.wrap(subject).select(content, options)
        }
    }
})

Cypress.Commands.add('hoverAndLog', { prevSubject: 'element' }, (subject, options) => {
    const selector = subject[0].localName

    if( options && options.scrollIntoView){
        cy.wrap(subject).scrollIntoView()
    }

        cy.wrap(subject).realHover(options)
    }
)