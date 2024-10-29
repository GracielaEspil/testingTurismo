export class Landingpage {
    logoWs(){
        return cy.get(".whatsapp")
    }

    imgDescubriTapalque(){
        return cy.get("#banner")  
    }

    imgAzulOndas(){
        return cy.get("img[alt='Ondas']")
    }

    imgTresEstrellas(){
        return cy.get("body > main:nth-child(13) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)")
    }

    textNegrita(){
        return cy.get("body > main:nth-child(13) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)")
    }

    texto(){
        return cy.get("body > main:nth-child(13) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)")
    }

    toponimo(){
        return cy.get("#toponimo")
    }

    imgEvento(){
        return cy.get("body > main:nth-child(13) > section:nth-child(4) > div:nth-child(1) > div:nth-child(1)")
    }

    imgGastronomia(){
        return cy.get("body > main:nth-child(13) > section:nth-child(4) > div:nth-child(2) > div:nth-child(1)")
    }

    imgHospedaje(){
        return cy.get("body > main:nth-child(13) > section:nth-child(4) > div:nth-child(3) > div:nth-child(1)")
    }

    comoLlegar(){
        return cy.get(".bg-white.w-full.py-10.flex.justify-center")
    }

    
}