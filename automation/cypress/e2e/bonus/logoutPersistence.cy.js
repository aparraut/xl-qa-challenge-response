describe('Bonus Test - Logout with cart persistence', () => {
  let users
  before(() => {
    cy.fixture('users').then((data) => {
      users = data
    })
  })

  it('Cart items should persist after logout and login again', () => {
    // Login with standard_user
    cy.login(users.standard.username, users.standard.password)
    cy.url().should('include', '/inventory.html')

    // Add a product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')

    // Logout via side menu
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()

    // Validate return to login page
    cy.url().should('include', '/')
    cy.get('[data-test="login-button"]').should('be.visible')

    // Login again
    cy.login(users.standard.username, users.standard.password)
    cy.url().should('include', '/inventory.html')

    // Assert cart badge still shows 1 item
    cy.get('.shopping_cart_badge').should('have.text', '1')

    // Go to cart and validate product is still there
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.contains('Sauce Labs Backpack').should('be.visible')
  })
})