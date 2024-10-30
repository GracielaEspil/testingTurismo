<reference types="cypress"/>


describe('hospedaje', () => {
    const hospedaje = new hospedaje()
    beforeEach(()=>{
        cy.visit(Cypress.env('baseUrl'))
    })
    it('hospedaje- vista', { tags: 't1' }, () => {
        hospedaje.logoWas().should("be.visible")
        hospedaje.imagCar().should("be.visible")
        hospedaje.banner().should("be.visible")
        hospedaje.textoE().should("be.visible")


            

    });
});