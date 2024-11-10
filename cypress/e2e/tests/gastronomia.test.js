/// <reference types="cypress" />

describe('Gastronomia', () => {
  beforeEach(() => {
    // Configurar para ignorar errores de React
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    // Visitar la página principal
    cy.visit('https://tapalque.tur.ar', { timeout: 60000 })
  })

  it('debe mostrar contenido relacionado con Gastronomía', () => {
    // Esperar a que la página cargue completamente
    cy.get('body').should('be.visible')

    // Función para verificar el contenido de gastronomía
    const checkGastronomyContent = () => {
      // Verificar contenido relevante
      cy.contains('Gastronomía', { matchCase: false, timeout: 10000 }).should('be.visible')

      // Verificar la presencia de elementos que podrían ser restaurantes
      cy.get('body').then($body => {
        const restaurantTerms = ['Restaurante', 'Bar', 'Cantina', 'Comida', 'Gastronomía']
        const hasRestaurantContent = restaurantTerms.some(term => 
          $body.text().toLowerCase().includes(term.toLowerCase())
        )

        if (hasRestaurantContent) {
          cy.log('Se encontró contenido relacionado con restaurantes')
        } else {
          throw new Error('No se encontró contenido relacionado con restaurantes')
        }
      })

      // Verificar la presencia de imágenes
      cy.get('img').should('have.length.at.least', 1)
    }

    // Intentar encontrar y hacer clic en el enlace de Gastronomía
    cy.get('body').then($body => {
      if ($body.find('a:contains("Gastronomía")').length > 0) {
        cy.contains('a', 'Gastronomía', { matchCase: false }).click({ force: true })
        cy.wait(2000) // Esperar a que se cargue el contenido después del clic
        checkGastronomyContent()
      } else if ($body.find('button:contains("Gastronomía")').length > 0) {
        cy.contains('button', 'Gastronomía', { matchCase: false }).click({ force: true })
        cy.wait(2000) // Esperar a que se cargue el contenido después del clic
        checkGastronomyContent()
      } else {
        // Si no se encuentra un enlace específico, buscar contenido de gastronomía en la página principal
        cy.log('No se encontró un enlace específico de Gastronomía. Verificando contenido en la página principal.')
        checkGastronomyContent()
      }
    })

    // Verificar la presencia del pie de página
    cy.get('footer').should('be.visible')
  })
})