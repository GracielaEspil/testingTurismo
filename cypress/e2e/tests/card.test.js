describe('pagina hospedaje', () => {
    
    beforeEach(()=>{
        cy.visit(Cypress.env('baseUrl') + '/hospedaje')
    })
    it('pagina  hospedaje - vista', { tags: 't1' }, () => {
       cy.get("div.font-bold").each(link=>{
        console.log(link.text().trim())
       })


            

    });
});