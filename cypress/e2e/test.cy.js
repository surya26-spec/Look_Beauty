describe('Regression Test', () => {

  it('Loads homepage', () => {
    cy.visit('/')
    cy.title().should('exist')
  })

})
