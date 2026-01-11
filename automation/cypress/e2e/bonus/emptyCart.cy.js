describe('Bonus Test – Prevent purchase with empty cart', () => {
  let users

  before(() => {
    cy.fixture('users').then((data) => {
      users = data
    })
  })

  it('Should block checkout completion when cart has no items', () => {
    // Login with valid standard_user
    cy.login(users.standard.username, users.standard.password)
    cy.url().should('include', '/inventory.html')

    // Navigate to cart without adding products
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_item').should('not.exist')

    // Attempt to start checkout
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')

    // Fill checkout form
    cy.get('[data-test="firstName"]').type(users.standard.firstName)
    cy.get('[data-test="lastName"]').type(users.standard.lastName)
    cy.get('[data-test="postalCode"]').type(users.standard.postalCode)
    cy.get('[data-test="continue"]').click()

    // Expectation: should NOT reach checkout-step-two
    cy.url().should('not.include', '/checkout-step-two.html')

    // Expectation: system should show validation error (currently missing)
    cy.contains(/error|invalid|empty/i).should('exist')

    // Extra validation: ensure no Finish button and total is $0
    cy.get('body').should('not.contain', 'Finish')
    cy.contains('Total: $0.00').should('exist')
  })
})
