## Part 3: Exploratory Testing

> Note: For clarity and evaluator convenience, exploratory testing findings are presented in a concise format. 
> In a real QA environment (e.g., Jira/ClickUp), each issue would be documented with full detail (prerequisites, steps, expected vs. actual results, etc). 
> Here, brevity was chosen to keep the repository clean and easy to review.

### Approach
I manually explored the [SauceDemo](https://www.saucedemo.com/) website using all available user credentials to evaluate functionality, usability, performance, accessibility, and security aspects.

**Navigation flow tested**:  
Login → Inventory → Product Details → Cart → Checkout → Order Confirmation

**Users tested**:  
- standard_user  
- locked_out_user  
- problem_user  
- performance_glitch_user  
- error_user  
- visual_user  

**Environment**:  
- Desktop: Google Chrome (latest)  
- Mobile: Chrome DevTools mobile emulator (iPhone 12 & Galaxy S20) and Physical Device: Samsung Galaxy A15

### Documented Issues (6 findings covering different categories)

I identified **at least 4 issues** as requested, covering **functionality, usability, performance, security, and accessibility**.

| # | Category              | Issue Title                                      | Description                                                                                          | Steps to Reproduce                                                                 | Severity | Impact / Recommendation                              |
|---|-----------------------|--------------------------------------------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|----------|-------------------------------------------------------|
| 1 | Functionality         | Login Failure - Locked Out User [Evidence](screenshots/Login%20Failure%20-%20Locked%20Out_User.png) | User "locked_out_user" cannot log in. Error message: "Epic sadface: Sorry, this user has been locked out." No recovery option provided (e.g. forgot password link). | 1. Enter username: locked_out_user<br>2. Password: secret_sauce<br>3. Click Login | High     | Completely blocks access. Add password recovery flow. |
| 2 | Usability / Visual    | Incorrect Product Images - Problem User [Evidence](screenshots/Incorrect%20Product%20Images%20-%20Problem%20User.png) | With "problem_user", product images are incorrect or swapped (e.g. backpack shows a dog image instead of the actual product). | 1. Login as problem_user<br>2. View inventory page | Medium   | Breaks product trust. Fix image mapping.              |
| 3 | Performance           | Severe Delays - Performance Glitch User [Evidence](screenshots/Severe%20Delays%20Performance%20Glitch%20User.mp4) | "performance_glitch_user" experiences artificial 2–5 second delays on key actions (login, Back to products from PDP, Back to home from Checkout Complete). | 1. Login as performance_glitch_user → delay<br>2. From PDP click "Back to products" → delay<br>3. From Checkout Complete click "Back to home" → delay | High     | Very frustrating UX. Critical for real e-commerce. Optimize performance. |
| 4 | Functionality         | Add to Cart Failure - Error User [Evidence](screenshots/Add%20to%20Cart%20Failure%20-%20Error%20User.png)  | User "error_user" cannot add certain products to cart (Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket, Test.allTheThings() T-Shirt). Buttons are unresponsive. | 1. Login as error_user<br>2. Try adding listed products to cart | High     | Blocks purchase of specific items. Fix button handlers. |
| 5 | Functionality / UI    | Sorting Feature Broken - Error User [Evidence](screenshots/Sorting%20Broken%20-%20Error%20User.png)| When sorting products by name or price, a pop-up error appears: "Sorting is broken! This error has been reported to Backtrace." Sorting does not apply. | 1. Login as error_user<br>2. Use sorting dropdown (Name A-Z, Price Low-High, etc.) | High     | Critical usability issue. Fix sorting logic and error handling. |
| 6 | Functionality / Form  | Last Name Field Blocked - Error User  | On checkout form, the "Last Name" field does not accept input. Autofill suggestions appear but manual entry is blocked. | 1. Login as error_user<br>2. Add product to cart<br>3. Proceed to checkout<br>4. Try typing in Last Name field | Critical | Completely blocks checkout. Fix input field validation and handlers. |
| 7 | Security / Usability  | Very Weak Password Policy                        | All users share the same simple password "secret_sauce". No complexity requirements, no rate limiting or CAPTCHA on failed logins. | Observed during all login attempts | Medium   | High brute-force risk in real app. Enforce strong passwords + protections. |
| 8 | Accessibility         | Missing Alt Text & Poor Keyboard Navigation      | Product images lack meaningful alt text (screen readers say "undefined"). Checkout form has focus issues on mobile when using keyboard/talkback. | 1. Use screen reader (VoiceOver/NVDA)<br>2. Tab through checkout form on mobile | Medium   | WCAG violation. Add proper alt text and improve focus management. |

### Summary & Recommendations
The site works correctly with the **standard_user**, but the different credential types intentionally introduce bugs to simulate real-world QA challenges.

**Key improvement areas**:
- Performance optimization (especially for slow networks/devices)
- Better error recovery & user feedback
- Proper accessibility implementation (alt text, keyboard navigation)
- Stronger authentication/security practices in production

These findings provide valuable insights into how different user profiles can reveal critical quality issues.
