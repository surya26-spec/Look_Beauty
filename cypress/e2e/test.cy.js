describe('Regression Test', () => {

  it('Loads homepage', () => {
    cy.visit('/')
    cy.title().should('exist')
  })

  it('Basic UI checks', () => {
    cy.visit('/')

    // ✅ safe checks
    cy.get('body').should('be.visible')
    cy.get('.navbar-brand').should('exist')
    cy.get('img').should('exist')
  })

  it('Form interaction test', () => {
    cy.visit('/')

    // ✅ fill form (based on your HTML)
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="email"]').type('test@example.com')
    cy.get('input[name="date"]').type('2026-04-01')

    cy.get('select[name="service"]').select('Hair Styling')

    // ✅ submit button exists
    cy.get('button[type="submit"]').should('exist')
  })

})
