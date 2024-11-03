/// <reference types="cypress"/>
import { Gastronomiapage } from "../pages/gastronomiapage.page";


describe('gastronomia', () => {
    const gastronomiapage = new Gastronomiapage();

    beforeEach(() => {
        cy.visit(`${Cypress.env('baseUrl')}`);
        cy.wait(10000); // O verifica la carga del elemento específico
    });

    it('Gastronomia - Vista Completa', { tags: ['t1'] }, () => {
        gastronomiapage.Wha().should("be.visible", { timeout: 6000  }); // Verifica el elemento
        cy.get('img[src="/imgs/gastronomia/imagen1.jpg"]').should('be.visible')
        // hospedajePage.imag1().should('be.visible');
        // hospedajePage.imag1().should('be.visible');
        // hospedajePage.imag1().should('be.visible');
        // hospedajePage.imag1().should('be.visible');
        // hospedajePage.banner().should("be.visible");
        // hospedajePage.texto().should("be.visible");

        // Verificación de un botón "Ver listado completo"
        cy.contains('Ver listado completo').should('be.visible').click();
        cy.url().should('include', '/listado-completo');
    });
});
