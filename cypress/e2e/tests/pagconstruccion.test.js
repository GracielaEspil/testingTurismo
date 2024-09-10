/// <reference types="cypress"/>

import { PagCostruccion } from "../pages/pagconstruccionpage.page";

describe('pagina en costruccion', () => {
    const pagCostruccion = new PagCostruccion()
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
    it('pagina  en construccion- vista', { tags: 't1' }, () => {
        pagCostruccion.logoWas().should("be.visible")
        pagCostruccion.image().should("be.visible")
        pagCostruccion.video().should("be.visible")
        pagCostruccion.contextoT().should("be.visible")
        pagCostruccion.textoE().should("be.visible")


            

    });
});