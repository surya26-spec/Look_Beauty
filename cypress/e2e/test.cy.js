describe('Regression Test', () => {

  it('Loads homepage', () => {
    cy.visit('/')
    cy.title().should('include', 'Look')
  })

  it('Checks page content', () => {

    cy.get('body', { timeout: 15000 }).should('be.visible')

    // ✅ FIXED (most stable)
    cy.get('.navbar-brand', { timeout: 15000 })
      .should('contain', 'Look Beauty')

    // ✅ safe image check
    cy.get('img', { timeout: 15000 })
      .should('have.length.greaterThan', 0)

  })

})
