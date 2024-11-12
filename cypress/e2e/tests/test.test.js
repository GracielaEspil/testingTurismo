/// <reference types="cypress"/>

import { Landingpage } from "../pages/landingpage.page";

describe('Landingpage', () => {
    const landingpage = new Landingpage()
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })
        
    it('landingpage', { tags: 't1' }, () => {
       landingpage.logoWs().should("be.visible") 
       landingpage.imgDescubriTapalque().should("be.visible")
       landingpage.imgAzulOndas().should("be.visible") 
       landingpage.imgTresEstrellas().should("be.visible")
       landingpage.textNegrita().should("be.visible") 
       landingpage.texto().should("be.visible")
       landingpage.toponimo().should("be.visible")
    });
});