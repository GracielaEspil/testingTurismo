/// <reference types="cypress"/>

// Importa la clase PagConstruccion si está en un archivo separado
import { PagConstruccion } from '../pages/Pagcontruccionpage.page';

describe('PagCostrucion', () => {
  const page = new PagConstruccion();

  beforeEach(() => {
    cy.visit('baseUrl/g');
  });
  it('gastronomia' , { tags: 't1' }, () => {
    cy.chekingfooterazul()
    PagConstruccionpage.logoWs().should("be.visible")
    PagConstruccionpage.logo1().should("be.visible")
    PagConstruccionpage.texto1().should("be.visible")
    PagConstruccionpage.texto2().should("be.visible")
    
});
});

