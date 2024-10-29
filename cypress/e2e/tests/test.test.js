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
        cy.checkingnav()
        cy.checkingfooter()
        cy.checkingfooterazul()
        page404.textoerror().should("be.visible")
        page404.textoH2().should("be.visible")
        page404.imgLogo().should("be.visible")
        page404.btnGastronimia().should("be.visible")
        page404.btnHospedaje().should("be.visible")
        page404.btnEventos().should("be.visible")
        page404.btnQuienes().should("be.visible")
        page404.btnHistoria().should("be.visible")
        page404.btnTurRural().should("be.visible")
        page404.btnAtractivos().should("be.visible")
        page404.btnPanel().should("be.visible")
        page404.btnRecupContra().should("be.visible")
        page404.whatsapp().should("be.visible")

    });

});