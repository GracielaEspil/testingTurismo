/// <reference types="cypress"/>

// Importa la clase PagConstruccion si está en un archivo separado
import { PagConstruccion } from '../pages/PagContruccion.page';

describe('PagCostrucion', () => {
  const page = new PagConstruccion();

  beforeEach(() => {
    cy.log(Cypress.env('baseUrl'))
        cy.visit(Cypress.env('baseUrl') + '/g', { failOnStatusCode: false });
  });
  it('PagCostrucion' , { tags: 't1' }, () => {
    cy.chekingfooterazul()
    PagConstruccion.logoWs().should("be.visible")
    PagConstruccion.logo1().should("be.visible")
    PagConstruccion.texto1().should("be.visible")
    PagConstruccion.texto2().should("be.visible")
    
});
})

