class Gastronomia {
  visitPage() {
    cy.visit('https://tapalque.tur.ar/gastronomia', { failOnStatusCode: false });
  }
  

  getHeader() {
    return cy.get('header')
  }

  getNavigation() {
    return cy.get('nav')
  }

  // getBanner() {
  //   return cy.get('.banner') // Asegúrate de que `.banner` sea correcto
  // }

  getRestaurantList() {
    return cy.get('.restaurant-list') // Asegúrate de que `.restaurant-list` sea correcto
  }

  // getRestaurantItems() {
  //   return cy.get('.restaurant-item') // Asegúrate de que `.restaurant-item` sea correcto
  // }

  getFirstRestaurant() {
    return this.getRestaurantItems().first()
  }

  getPagination() {
    return cy.get('.pagination') // Asegúrate de que `.pagination` sea correcto
  }

  getInfoSections() {
    return cy.get('.info-section') // Asegúrate de que `.info-section` sea correcto
  }

  getFooter() {
    return cy.get('footer')
  }

  getSocialLinks() {
    return this.getFooter().find('a[href*="facebook"], a[href*="instagram"]') // Verifica si estos selectores son correctos
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

export { Gastronomia }
