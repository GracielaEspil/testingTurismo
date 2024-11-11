/// <reference types="cypress" />


import { PagConstruccion } from './../pages/PagConstruccion.page';

describe('PagConstruccion', () => {
  const page = new PagConstruccion();

  beforeEach(() => {
    cy.visit(`${Cypress.env('baseUrl')}`);
    cy.wait(5000);
   
  });

  it('PagConstruccion', { tags: 't1' }, () => {
    // cy.chekingfooterazul();
    PagConstruccion.logoWs().should("be.visible");
    PagConstruccion.logo1().should("be.visible");
    PagConstruccion.texto1().should("be.visible");
    PagConstruccion.texto2().should("be.visible");
  });
});
