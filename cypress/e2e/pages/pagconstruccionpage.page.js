export class PagCostruccion{
    logo(){
        return cy.get("img[alt='Logo Tapalqué']")
    }
    
    fondo(){
        return cy.get(".flex.flex-col.items-center")
    }

    Titulo(){
        return cy.get(" h1[class] ")
    }
    textoDes(){
        return cy.get("p[class]")
    }
    FooterAzul(){
        return cy.get("#footerAzul")
    }
}