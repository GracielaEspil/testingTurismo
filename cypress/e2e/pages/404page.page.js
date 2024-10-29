export class Pag404page{

    imgLogo(){
        return cy.get("img[alt='Icono de Error']")
    }

    textoerror(){
        return cy.get("h1[class='text-[#E65829] font-arima text-4xl font-bold leading-[65px] mb-4 text-center relative z-10']")
    }

    textoH2(){
        return cy.get("body > div:nth-child(13) > p:nth-child(2)")
    }

    btnGastronimia() {
        return cy.get("body > div:nth-child(13) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)")
    }

    btnHospedaje() {
        return cy.get("body > div:nth-child(13) > div:nth-child(3) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1)")
    }

    btnEventos() {
        return cy.get("body > div:nth-child(13) > div:nth-child(3) > div:nth-child(3) > a:nth-child(1) > div:nth-child(1)")
    }

    btnQuienes(){
        return cy.get("body > div:nth-child(13) > div:nth-child(3) > div:nth-child(4) > a:nth-child(1) > div:nth-child(1)")
    }

    btnHistoria(){
        return cy.get("body > div:nth-child(13) > div:nth-child(3) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1)")
    }

    btnTurRural(){
        return cy.get("body > div:nth-child(13) > div:nth-child(4) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)")
    }

    btnAtractivos(){
        return cy.get("body > div:nth-child(13) > div:nth-child(4) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1)")
    }

    btnPanel(){
        return cy.get("body > div:nth-child(13) > div:nth-child(4) > div:nth-child(3) > a:nth-child(1) > div:nth-child(1)")
    }

    btnRecupContra(){
        return cy.get("body > div:nth-child(13) > div:nth-child(4) > div:nth-child(4) > a:nth-child(1) > div:nth-child(1)")
    }
    
    whatsapp(){
        return cy.get("img[alt='Whatsapp Turismo Tapalqué']")
    }

}