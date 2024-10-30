/// <reference types="cypress" />
import { Hospedaje } from '../page/Hospedaje';

describe('Hospedaje', () => {
    const Hospedaje = new Hospedaje()
    
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
    })
    
    it('Hospedaje - Vista', { tags: 't1' }, () => {
        Hospedaje.logoWa().should("be.visible")
        Hospedaje.imgCar().should("be.visible")
        Hospedaje.banner().should("be.visible")
        Hospedaje.texto().should("be.visible")
    });
});