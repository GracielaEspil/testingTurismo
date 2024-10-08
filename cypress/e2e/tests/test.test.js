/// <reference types="cypress"/>

import { Landingpage } from "../pages/landingpage.page";

describe('Landingpage', () => {
    const landingpage = new Landingpage()
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })
        
    it('landingpage', { tags: 't1' }, () => {
       landingpage.logoWs().should("be.visible") 
       landingpage.carrouselTapalque().should("be.visible")
    });
});