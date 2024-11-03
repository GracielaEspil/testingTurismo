import { Gastronomia } from '../../page/gastronomiapage/page';

describe('Gastronomia', () => {
    const gastronomiaPage = new Gastronomia();

    beforeEach(() => {
        cy.visit(`${Cypress.env('baseUrl')}/g`, { failOnStatusCode: false });
        gastronomiaPage.waitForPageLoad();
    });

    it('Verifica la visibilidad del banner', () => {
        gastronomiaPage.banner().should('be.visible');
    });

    it('Verifica que el texto principal esté visible', () => {
        gastronomiaPage.texto().should('be.visible');
    });

    it('Verifica que la imagen "Club social" esté visible', () => {
        gastronomiaPage.imag1().should('be.visible');
    });

    it('Verifica que la imagen "Terra Bar y Cantina" esté visible', () => {
        gastronomiaPage.imag2().should('be.visible');
    });

    it('Verifica que la imagen "El Vasco" esté visible', () => {
        gastronomiaPage.imag3().should('be.visible');
    });

    it('Verifica que la imagen "Pulpería San Gervasio" esté visible', () => {
        gastronomiaPage.imag4().should('be.visible');
    });

    it('Verifica el botón de WhatsApp', () => {
        gastronomiaPage.Wha().should('be.visible');
    });

    it('Verifica el botón "Ver listado completo"', () => {
        gastronomiaPage.verListadoCompleto().should('be.visible');
    });
});
