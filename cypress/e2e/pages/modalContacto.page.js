export default class ModalContacto {

    imgJovenes() {
        return cy.get("#imgDeJovenes")
        
    }
    textoTitulo() {
        return cy.get("#h1contacto")
    }

    imgOnda() {
        return cy.get("#ondaAzul")
    }

    parrafoContacto() {
        return cy.get("#parrafoContac")
    }


    
}