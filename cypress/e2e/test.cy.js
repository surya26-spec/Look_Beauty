describe('Regression Test', () => {

  it('Loads homepage', () => {
    cy.visit('/')
    cy.title().should('include', 'Look')
  })

  it('Checks page content', () => {

    // wait for page fully load
    cy.get('body', { timeout: 15000 }).should('be.visible')

    // wait for navbar text (most stable element)
    cy.contains('Look Beauty Studio', { timeout: 15000 }).should('exist')

    // safer image check (not strict count)
    cy.get('img', { timeout: 15000 }).should('have.length.greaterThan', 0)

  })

})
