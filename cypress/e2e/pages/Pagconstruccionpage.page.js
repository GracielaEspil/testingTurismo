import class Pagconstruccionpage {
     
    logoWs(){
        return cy.get(".whatsapp")
    }

    logo1(){
        return cy.get("img[alt='Logo Tapalqué']")
    }
    texto2(){
        return cy.get("p[class='catamaran text-xl md:text-2xl font-light mx-4']")
    }  
    texto1(){
        return cy.get("h1[class='arima text-2xl md:text-5xl font-bold mb-6']")
    }
    }
