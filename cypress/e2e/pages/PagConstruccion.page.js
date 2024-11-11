export class PagConstruccion {
    logoWs() {
      return cy.get(".whatsapp");
    }
  
    logo1() {
      return cy.get("img[alt='Logo Tapalqué']");
    }
  
    texto2() {
      return cy.get("p.catamaran.text-xl.md:text-2xl.font-light.mx-4");
    }
  
    texto1() {
      return cy.get("h1.arima.text-2xl.md:text-5xl.font-bold.mb-6");
    }
  }
  