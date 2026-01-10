describe('Mandatory Purchase Flow - performance_glitch_user', () => {
  let users

  before(() => {
    cy.fixture('users').then((data) => {
      users = data
    })
  })

  beforeEach(() => {
    cy.login(users.performance.username, users.performance.password)
    cy.url().should('include', '/inventory.html')
  })

  it('Completes purchase flow from Product Detail Page and validates order summary with dynamic product name', () => {
    // 1. Select first product, store its name as alias, then open Product Detail Page (PDP)
    cy.get('[data-test="inventory-item-name"]').first().then(($el) => {
      cy.wrap($el.text().trim()).as('selectedProduct')
      cy.wrap($el).click()
    })
    cy.url().should('include', '/inventory-item.html')

    // 2. Add product to cart from PDP
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')

    // 3. Return to inventory using "Back to Products" button
    cy.get('[data-test="back-to-products"]').click()
    cy.url().should('include', '/inventory.html')

    // 4. Proceed to checkout and complete purchase flow
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')

    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')

    // Fill checkout form using fixture data
    cy.get('[data-test="firstName"]').type(users.performance.firstName)
    cy.get('[data-test="lastName"]').type(users.performance.lastName)
    cy.get('[data-test="postalCode"]').type(users.performance.postalCode)
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')

    // Verify that the selected product appears in the order summary
    cy.get('.cart_item').should('have.length', 1)
    cy.get('@selectedProduct').then((productName) => {
      cy.get('.inventory_item_name').should('contain.text', productName)
    })

    // Verify that the price is displayed in the order summary
    cy.get('.inventory_item_price').should('be.visible')
    cy.get('.summary_subtotal_label').should('contain.text', 'Item total')

    // Finish purchase
    cy.get('[data-test="finish"]').click()
    cy.url().should('include', '/checkout-complete.html')

    // Validate confirmation message
    cy.contains('Thank you for your order!').should('be.visible')

    // Extra assertion: cart should be empty after purchase
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('not.exist')
    cy.get('.shopping_cart_badge').should('not.exist')
  })
})
