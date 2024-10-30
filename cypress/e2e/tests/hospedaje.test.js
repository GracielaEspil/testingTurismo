/// <reference types="cypress" />
import { Hospedaje } from "./pages/Hospedaje";

describe('Hospedaje', () => {
    const hospedaje = new Hospedaje()  // Cambié a minúscula para evitar conflicto
    
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
    })
    
    it('Hospedaje - Vista', { tags: 't1' }, () => {
        hospedaje.logoWa().should("be.visible")
        hospedaje.imgCar().should("be.visible")
        hospedaje.banner().should("be.visible")
        hospedaje.texto().should("be.visible")
    });
});
