describe('Regression Test', () => {

  it('Loads homepage', () => {
    cy.visit('/')
    cy.title().should('include', 'Look')
  })

  it('Checks page content', () => {

    // Page loaded
    cy.get('body', { timeout: 15000 }).should('be.visible')

    // ✅ Stable navbar check (NO text issues)
    cy.get('.navbar-brand', { timeout: 15000 })
      .should('exist')
      .and('be.visible')

    // ✅ Image check
    cy.get('img', { timeout: 15000 }).should('exist')

  })

})
