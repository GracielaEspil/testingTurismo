describe('pagina home', () => {
    
    beforeEach(()=>{
        cy.visit(Cypress.env('baseUrl'))
    })
    it('pagina  home - vista', { tags: 't1' }, () => {
       cy.get("li.class-item-menu").each(link=>{
        console.log(link.text().trim())
       })


            

    });
});