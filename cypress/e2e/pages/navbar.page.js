export default class NavbarPage {
    logoImage(){
        return cy.get("#logo1")
    }

    acerca(){
        return cy.get("li[class='relative w-full md:w-[140px] lg:w-full'] span[class='class-item-menu']") 
    }
    
    hospedaje(){
        return cy.get("#linkhospedaje") 
    }

    gastronomia(){
        return cy.get("#linkgastronomia") 
    }

    turismorural(){
        return cy.get("li[class='relative w-full md:w-auto'] span[class='class-item-menu']") 
    }

    atractivos(){
        return cy.get("#linkatractivos") 
    }
    contacto(){
        return cy.get("#linkcontacto") 
    }
    icon(){
        return cy.get("#linknavbaricon") 
    }

}