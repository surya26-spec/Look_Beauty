describe('Regression Test', () => {

  it('Loads homepage', () => {
    cy.visit('/')   // uses baseUrl from config
  })

  it('Checks page content', () => {
    cy.get('body').should('be.visible')

    // Strong validation (important)
    cy.contains('Look').should('exist')

    // Optional image check
    cy.get('img').should('have.length.greaterThan', 0)
  })

})
