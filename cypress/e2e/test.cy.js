describe('Regression Test', () => {

  it('Loads homepage', () => {
    cy.visit('/')
    cy.title().should('not.be.empty')
  })

  it('Checks page content', () => {
    cy.get('body').should('be.visible')

    // Case-insensitive check
    cy.contains(/look/i).should('exist')

    // Check images exist
    cy.get('img').should('have.length.greaterThan', 0)
  })

})
