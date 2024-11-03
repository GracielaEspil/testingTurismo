/// <reference types="cypress" />

import Gastronomia from '..pages/gastronomiapage.page'

describe('Pruebas de la Página de Gastronomía', () => {
  const gastronomia = new Gastronomia()

  beforeEach(() => {
    gastronomia.visitar()
    gastronomia.esperarCargaPagina()
  })

  it('debería mostrar el banner principal', () => {
    gastronomia.elementos.banner()
      .should('be.visible')
      .and('have.attr', 'alt', 'Banner Gastronomía')
  })

  it('debería mostrar tarjetas de restaurantes', () => {
    gastronomia.elementos.tarjetasRestaurantes()
      .should('have.length.at.least', 4)
    
    const restaurantes = ['Club social', 'Terra Bar y Cantina', 'El Vasco', 'Pulpería San Gervasio']
    restaurantes.forEach(restaurante => {
      gastronomia.obtenerTarjetaRestaurante(restaurante)
        .should('be.visible')
        .and('contain.text', restaurante)
    })
  })

  it('debería tener un botón de WhatsApp funcional', () => {
    gastronomia.elementos.botonWhatsapp()
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'whatsapp.com')
  })

  it('debería tener un botón "Ver listado completo" funcional', () => {
    gastronomia.elementos.botonVerListado()
      .should('be.visible')
      .and('not.be.disabled')
      .click()
    // Aquí podrías agregar una verificación adicional después de hacer clic en el botón
    // Por ejemplo, verificar que se muestra una lista completa de restaurantes
  })
})