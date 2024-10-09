/// <reference types="cypress"/>

import { PagCostruccion } from "../pages/pagconstruccionpage.page";

describe('pagina en costruccion', () => {
    const pagCostruccion = new PagCostruccion()
    beforeEach(()=>{
        cy.visit(Cypress.env('baseUrl'))
    })
    it('pagina  en construccion- vista', { tags: 'TT-45' }, () => {
        pagCostruccion.logo().should("be.visible")
        pagCostruccion.fondo().should("be.visible")
        pagCostruccion.Titulo().should("be.visible")
        pagCostruccion.textoDes().should("be.visible")
        pagCostruccion.FooterAzul().should("be.visible")


            

    });
});