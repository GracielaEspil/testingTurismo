/// <reference types="cypress"/>

import { Landingpage } from "../pages/landingpage.page";

describe('Landingpage', () => {
    const landingpage = new Landingpage()
    beforeEach(() =>{
        cy.log(Cypress.env('baseUrl'))
        cy.visit(Cypress.env('baseUrl'), { failOnStatusCode: false });
    })
    it('Pagina landing page' , { tags: 't1' }, () => {
        cy.checkingnav()
        cy.checkingfooter()
        cy.checkingfooterazul()
        landingpage.logoWs().should("be.visible")
        landingpage.imgDescubriTapalque().should("be.visible")
        landingpage.imgAzulOndas().should("be.visible")
        landingpage.imgTresEstrellas().should("be.visible")
        landingpage.textNegrita().should("be.visible")
        landingpage.texto().should("be.visible")
        landingpage.toponimo().should("be.visible")
        
    });
});