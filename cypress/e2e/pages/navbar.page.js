export default class NavbarPage {
    logoImage(){
        return cy.get("#logo1") 
    }

    acerca(){
        return cy.get("#acerca") 
    }
    
    hospedaje(){
        return cy.get("#linkhospedaje") 
    }

    gastronomia(){
        return cy.get("#linkgastronomia") 
    }

    turismorural(){
        return cy.get("#turismo") 
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