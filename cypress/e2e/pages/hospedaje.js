export class Hospedaje {
    banner() {
        return cy.get("#bannerhistoria")
    }
    
    texto() {
        return cy.get("p") // Ajustado a un selector de párrafo genérico
    }
    
    imgCar() {
        return cy.get("img[alt='Galpon de Cartas 2']")
    }
    
    logoWa() {
        return cy.get("img[alt='Whatsapp Turismo Tapalqué']")
    }
}