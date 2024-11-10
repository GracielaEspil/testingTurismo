export class Gastronomia {
    visitPage() {
      cy.visit('/gastronomia')
    }
  
    getHeader() {
      return cy.get('header')
    }
  
    getNavigation() {
      return cy.get('nav')
    }
  
    getBanner() {
      return cy.get('.banner')
    }
  
    getRestaurantList() {
      return cy.get('.restaurant-list')
    }
  
    getRestaurantItems() {
      return cy.get('.restaurant-item')
    }
  
    getFirstRestaurant() {
      return this.getRestaurantItems().first()
    }
  
    getPagination() {
      return cy.get('.pagination')
    }
  
    getInfoSections() {
      return cy.get('.info-section')
    }
  
    getFooter() {
      return cy.get('footer')
    }
  
    getSocialLinks() {
      return this.getFooter().find('a[href*="facebook"], a[href*="instagram"]')
    }
  
    assertPageTitle(title) {
      cy.title().should('include', title)
    }
  
    assertRestaurantCount(minCount) {
      this.getRestaurantItems().should('have.length.at.least', minCount)
    }
  
    assertInfoSectionsExist() {
      this.getInfoSections().should('have.length', 3)
      cy.contains('Próximos Eventos').should('be.visible')
      cy.contains('Hospedaje').should('be.visible')
      cy.contains('Gastronomía').should('be.visible')
    }
  }