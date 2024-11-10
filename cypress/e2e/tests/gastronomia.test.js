/// <reference types="cypress" />

import { Gastronomia } from '../pages/gastronomiapage.page'

describe('Página de Gastronomía', () => {
  const gastronomia = new Gastronomia()

  beforeEach(() => {
    gastronomia.visitPage()
  })

  it('debe tener el título y encabezado correctos', () => {
    gastronomia.assertPageTitle('Tapalque')
    gastronomia.getHeader().should('be.visible')
    gastronomia.getNavigation().should('be.visible')
  })

  it('debe mostrar el banner de gastronomía', () => {
    gastronomia.getBanner().within(() => {
      cy.get('h1').contains('Gastronomía').should('be.visible')
    })
  })

  it('debe listar restaurantes', () => {
    gastronomia.getRestaurantList().should('exist')
    gastronomia.assertRestaurantCount(1)
  })

  it('debe mostrar detalles del restaurante', () => {
    gastronomia.getFirstRestaurant().within(() => {
      cy.get('img').should('be.visible')
      cy.get('h2').should('be.visible')
      cy.get('.description').should('be.visible')
      cy.get('.services').should('be.visible')
    })
  })

  it('debe tener paginación', () => {
    gastronomia.getPagination().should('be.visible')
  })

  it('debe tener secciones de información', () => {
    gastronomia.assertInfoSectionsExist()
  })

  it('debe tener un pie de página con enlaces sociales', () => {
    gastronomia.getFooter().should('be.visible')
    gastronomia.getSocialLinks().should('have.length', 2)
  })
})