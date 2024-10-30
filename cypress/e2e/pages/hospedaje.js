export class hospedaje{
    banner(){
        return cy.get("#bannerhistoria")
    }
    text(){
        return cy.get(".<p>")
    }
    imgCar(){
        return cy.get("img[alt='Galpon de Cartas 2']")
    }
    logWa(){
        return cy.get("img[alt='Whatsapp Turismo Tapalqué']")
    }
    
}