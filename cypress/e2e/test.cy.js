describe('Regression Test', () => {

  it('Loads homepage', () => {
    cy.visit('/')
    cy.title().should('include', 'Look')
  })

  it('Checks page content', () => {
    cy.get('body').should('be.visible')

    // FIX: match actual HTML text
    cy.contains('Look Beauty').should('exist')

    // FIX: correct image count
    cy.get('img').should('have.length', 3)
  })

})
