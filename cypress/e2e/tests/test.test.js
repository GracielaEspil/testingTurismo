/// <reference types="cypress"/>

import { Pag404page } from "../pages/404page.page";

describe('Pag404page', () => {
    const page404 = new Pag404page()
    beforeEach(()=>{
        cy.log(Cypress.env('baseUrl') + '/g')
        cy.visit(Cypress.env('baseUrl') + '/g', { failOnStatusCode: false });
        //("http://localhost:3000/g",{failOnStatusCode: false})
    })
    it('Pagina 404-vista', { tags: 't1' }, () => {
        page404.logoImage().should("be.visible")
        page404.home().should("be.visible")
        page404.eventos().should("be.visible")
        page404.gastronimia().should("be.visible")
        page404.btVolver().should("be.visible")
        page404.hospedaje().should("be.visible")
        page404.imagenFondo().should("be.visible")
        page404.piePagina().should("be.visible")
        page404.textoH2().should("be.visible")
        page404.textoH3().should("be.visible")
    });

});