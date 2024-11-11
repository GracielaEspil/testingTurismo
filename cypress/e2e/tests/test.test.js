/// <reference types="cypress"/>

import ModalContacto from "../pages/modalContacto.page";



describe('Modal Contacto page', () => {
    const modalcontacto = new ModalContacto()
    beforeEach(() =>{
        cy.log(Cypress.env('baseUrl'))
        cy.visit(Cypress.env('baseUrl'), { failOnStatusCode: false });
    })   
        it('Pagina modal contacto' , { tags: 't1' }, () => {
        modalcontacto.imgJovenes().should("be.visible")
        modalcontacto.textoTitulo().should("be.visible")
        modalcontacto.imgOnda().should("be.visible")
        modalcontacto.parrafoContacto().should("be.visible")
    });
});