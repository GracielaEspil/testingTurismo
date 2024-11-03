export class Gastronomia {
    // Selecciona el banner de la sección de Gastronomía
    banner() {
        return cy.get("#bannerhistoria");
    }
    
    // Selecciona el texto principal de la página
    texto() {
        return cy.get("p[class]");
    }
  
    // Selecciona cada imagen de la sección de Gastronomía usando su `alt`
    imag1() {
        return cy.get('img[src="/imgs/gastronomia/imagen1.jpg"][alt="Club social"]');
    }

    imag2() {
        return cy.get('img[src="/imgs/gastronomia/imagen2.jpg"][alt="Terra Bar y Cantina"]');
    }

    imag3() {
        return cy.get('img[src="/imgs/gastronomia/imagen3.jpg"][alt="El Vasco"]');
    }

    imag4() {
        return cy.get('img[src="/imgs/gastronomia/imagen4.jpg"][alt="Pulpería San Gervasio"]');
    }

    // Selector para el botón de WhatsApp
    Wha() {
        return cy.get(".whatsapp");
    }

    // Selector para el botón "Ver listado completo"
    verListadoCompleto() {
        return cy.contains('Ver listado completo');
    }

    // Método para esperar a que la página cargue completamente
    waitForPageLoad() {
        return cy.get('body').should('be.visible')
            .and('not.have.class', 'loading'); // Asegúrate de que esta clase sea correcta en tu proyecto
    }
}
