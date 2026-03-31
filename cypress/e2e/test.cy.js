describe('Regression Test', () => {

  it('Loads homepage', () => {
    cy.visit('/')
  })

  it('Checks page content', () => {
    cy.get('body').should('be.visible')
    cy.contains('look').should('exist')
    cy.get('img').should('have.length.greaterThan', 0)
  })

})
