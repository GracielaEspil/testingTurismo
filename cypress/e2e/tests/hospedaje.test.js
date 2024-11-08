/// <reference types="cypress"/>
import { Hospedaje } from "../pages/hospedajepage.page";


describe('Hospedaje', () => {
    const hospedajePage = new Hospedaje();

    beforeEach(() => {
        cy.visit(`${Cypress.env('baseUrl')}`);
        cy.wait(5000); // O verifica la carga del elemento específico
    });

    it('Hospedaje - Vista Completa', { tags: ['t1'] }, () => {
        hospedajePage.Wha().should("be.visible", { timeout: 6000  }); // Verifica el elemento
        cy.get('img[src="/imgs/hospedaje/imagen1.jpg"]').should('be.visible')
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
