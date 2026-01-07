QA Automation Project

This repository contains Cypress automated tests prepared for a QA job application. The tests are organized into mandatory and bonus scenarios for clarity.

📂 Project Structure

cypress/
├── e2e/
│   ├── mandatory/
│   │   └── purchaseFlow.cy.js
│   └── bonus/
│       └── logoutPersistence.cy.js
├── fixtures/
│   └── users.json
└── support/
    └── e2e.js

⚙️ Setup

Clone the repository.

Install dependencies:

npm install

Open Cypress Test Runner:

npx cypress open

Run all tests in headless mode:

npx cypress run

🧪 Tests

Mandatory Test: Purchase Flow

File: cypress/e2e/mandatory/purchaseFlow.cy.js

User: performance_glitch_user

Scenario:

Login with glitch user.

Select product from Product Detail Page.

Add product to cart.

Complete checkout flow.

Validate confirmation message.

Assert that cart is empty after purchase.

Bonus Test: Logout with Cart Persistence

File: cypress/e2e/bonus/logoutPersistence.cy.js

User: standard_user

Scenario:

Login with standard user.

Add product to cart.

Logout via side menu.

Login again.

Assert that cart still contains the product.

📄 Design Decisions

Custom Commands: Login encapsulated in cy.login() for reuse.

Fixtures: User credentials and checkout data stored in users.json.

Selectors: Prefer data-test attributes for stability.

Assertions: Added intermediate checks (URL includes, cart badge, product presence).

⚠️ Limitations

Tests depend on SauceDemo availability.

performance_glitch_user introduces intentional delays; timeouts adjusted accordingly.

No mocks or stubs; tests run against live demo site.

📸 Evidence

Cypress automatically generates screenshots and videos in cypress/screenshots/ and cypress/videos/.


✅ Summary

Mandatory: End-to-end purchase flow with glitch user.

Bonus: Logout and cart persistence with standard user.

Organized structure, clear documentation, and professional QA practices.