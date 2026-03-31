describe('Regression Test', () => {
  it('Loads homepage', () => {
    cy.visit('http://localhost:3000')
  })

  it('Checks page content', () => {
    cy.get('body').should('exist')
    cy.get('img').should('exist')
  })
})
