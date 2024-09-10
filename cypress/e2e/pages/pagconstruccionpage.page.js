export class PagCostruccion{
    logoWas(){
        return cy.get(".whatsapp")
    }
    image(){
        return cy.get("img[alt='Página en Construcción']")
    }
    video(){
        return cy.get(".video-background")
    }

    contextoT(){
        return cy.get(" div.content h1 ")
    }
    textoE(){
        return cy.get("div.content p")
    }
}