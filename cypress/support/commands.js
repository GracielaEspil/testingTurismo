// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import NavbarPage from "../e2e/pages/navbar.page"


const navbarPage= new NavbarPage
Cypress.Commands.add("checkingnav", ()=>{
    navbarPage.logoImage().should("be.visible")
    navbarPage.acerca().should("be.visible")
    navbarPage.hospedaje().should("be.visible")
    navbarPage.gastronomia().should("be.visible")
    navbarPage.turismorural().should("be.visible")
    navbarPage.atractivos().should("be.visible")
    navbarPage.contacto().should("be.visible")
    navbarPage.icon().should("be.visible")
})