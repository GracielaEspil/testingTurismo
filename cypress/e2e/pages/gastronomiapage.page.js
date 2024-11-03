export class Gastronomia {
    banner() {
        return cy.get("#bannerhistoria");
    }
    
    texto() {
        return cy.get("p[class]");
    }
  
     imag1() {
          return cy.get('img[src="/imgs/hospedaje/imagen1.jpg"][alt="Galpon de Cartas 1"]');
        
      }
    //   imag1() {
    //     return cy.get("img[alt='Galpon de Cartas 2']");
      
    // }
    // imag1() {
    //     return cy.get("img[alt='Galpon de Cartas 3']");
      
    // }
    // imag1() {
    //     return cy.get("img[alt='Galpon de Cartas 4']");
      
    // }

 
    Wha() {
        // Cambiamos el selector para ser más flexible
        return cy.get(".whatsapp");
    }

    verListadoCompleto() {
        return cy.contains('Ver listado completo');
    }

    // Método para esperar a que la página cargue completamente
    waitForPageLoad() {
        return cy.get('body').should('be.visible')
            .and('not.have.class', 'loading');
    }
}
  
  export default Gastronomia