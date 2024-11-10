class Gastronomia {
  getHeader() {
    return cy.get('header')
  }

  getNavigation() {
    return cy.get('nav')
  }

  getRestaurantList() {
    // Updated selector to match the actual restaurant listings
    return cy.get('.restaurant-item')
  }

  getFirstRestaurant() {
    return this.getRestaurantList().first()
  }

  getFooter() {
    return cy.get('footer')
  }

  getSocialLinks() {
    return this.getFooter().find('a[href*="facebook"], a[href*="instagram"]')
  }
}

export { Gastronomia }