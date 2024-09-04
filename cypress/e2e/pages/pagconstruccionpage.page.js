export class PagCostruccion{
    logoWas(){
        return cy.get(".washatpp")
    }
    image(){
        return cy.get("construction-image")
    }
    video(){
        return cy.get("video-background")
    }
    textoT(){
        return cy.get("h1-contains(text)")
    }
    textoE(){
        return cy.get("p[contains(text()")
    }
}