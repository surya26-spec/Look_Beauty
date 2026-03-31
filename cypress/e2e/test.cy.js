describe('Regression Test', () => {

  it('Loads homepage', () => {
    cy.visit('/')   // uses baseUrl
  })

  it('Checks page content', () => {
    cy.get('body').should('be.visible')

    // More stable check (case-insensitive alternative)
    cy.contains(/look/i).should('exist')

    // Image validation
    cy.get('img').should('have.length.greaterThan', 0)
  })

})
