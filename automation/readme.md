# QA Automation Project

This repository contains **Cypress automated tests** prepared for the Xmartlabs QA Technical Challenge.  
The tests are organized into **mandatory** and **bonus** scenarios for clarity.

---

## 📂 Project Structure

```
cypress/
├── e2e/
│   ├── mandatory/
│   │   └── purchaseFlow.cy.js
│   └── bonus/
│       └── emptyCart.cy.js
├── fixtures/
│   └── users.json
└── support/
    └── e2e.js
```

---

## ⚙️ Setup

1. Clone the repository  
   ```bash
   git clone https://github.com/aparraut/xl-qa-challenge-response.git
   ```
2. Move into the automation folder
   ```bash
   cd xl-qa-challenge-response/automation
   ```   
3. Install dependencies  
   ```bash
   npm install
   ```
4. Open Cypress Test Runner  
   ```bash
   npx cypress open
   ```
5. Run all tests in headless mode  
   ```bash
   npx cypress run
   ```

---

## 🧪 Tests

### Mandatory Test: Purchase Flow
- **File:** `cypress/e2e/mandatory/purchaseFlow.cy.js`  
- **User:** `performance_glitch_user`  
- **Scenario:**
  - Login with glitch user  
  - Select product from Product Detail Page  
  - Add product to cart  
  - Complete checkout flow  
  - Validate confirmation message  
  - Assert that cart is empty after purchase  

---

### Bonus Test: Empty Cart Checkout
- **File:** `cypress/e2e/bonus/emptyCart.cy.js`  
- **User:** `standard_user`  
- **Scenario:**
  - Login with standard user  
  - Go to cart without adding products 
  - Attempt to checkout
  - Fill checkout form  
  - Expectation: checkout should be blocked, but the app incorrectly allows completion
  - Test fails by design, exposing a critical business logic defect

---

## 📄 Design Decisions

- **Custom Commands:** Login encapsulated in `cy.login()` for reuse  
- **Fixtures:** User credentials and checkout data stored in `users.json`  
- **Selectors:** Prefer `data-test` attributes for stability  
- **Assertions:** Added intermediate checks (URL includes, cart badge, product presence)  
- **Bonus Test:** Selected a case with high business impact (invalid purchase flow)

---

## ⚠️ Limitations

- Tests depend on **SauceDemo** availability  
- `performance_glitch_user` introduces intentional delays; timeouts adjusted accordingly  
- No mocks or stubs; tests run against live demo site  
- Bonus Test fails as expected, since the application currently allows checkout with empty cart

---

## 📸 Evidence

Cypress automatically generates **screenshots** and **videos** in:  
- `cypress/screenshots/`  
- `cypress/videos/`  

---

## 📄 Test Report (Optional)

The Bonus Test **Empty Cart Checkout** fails as expected, proving the application allows completing checkout with no items.  
Below is evidence captured during Cypress run:

[Looks like the result wasn't safe to show. Let's switch things up and try something else!]

Video: [Checkout with Empty Cart_Failure.mp4](screenshots/emptyCart.cy.js.mp4)

This demonstrates the defect and validates the automation setup.

---

## ✅ Summary

- **Mandatory:** End-to-end purchase flow with glitch user  
- **Bonus:** Logout and cart persistence with standard user  
- Organized structure, clear documentation, and professional QA practices  
