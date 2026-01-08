## Part 3: Exploratory Testing

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
| 1 | Functionality         | Login Failure - Locked Out User [Evidence](screenshots/Login%20Failure%20-%20Locked%20Out_User.png)                 | User "locked_out_user" cannot log in. Error message: "Epic sadface: Sorry, this user has been locked out." No recovery option provided (e.g. forgot password link). | 1. Enter username: locked_out_user<br>2. Password: secret_sauce<br>3. Click Login | High     | Completely blocks access. Add password recovery flow. |
| 2 | Usability / Visual    | Incorrect Product Images - Problem User [Evidence](screenshots/Incorrect%20Product%20Images%20-%20Problem%20User.png)          | With "problem_user", product images are incorrect or swapped (e.g. backpack shows a dog image instead of the actual product). | 1. Login as problem_user<br>2. View inventory page                                  | Medium   | Breaks product trust. Fix image mapping.              |
| 3 | Performance           | Severe Delays - Performance Glitch User          | "performance_glitch_user" experiences artificial 2–5 second delays on almost every action (login, add to cart, checkout, etc.). | 1. Login as performance_glitch_user<br>2. Try adding items / proceeding to checkout | High     | Very frustrating UX. Critical for real e-commerce. Optimize performance. |
| 4 | Functionality / UI    | Intermittent Checkout Errors - Error User        | "error_user" causes inconsistent behavior: missing field validations fail silently, "Continue" button sometimes unresponsive, checkout process breaks intermittently. | 1. Login as error_user<br>2. Fill checkout form and try to proceed multiple times   | High     | Blocks purchase completion. Fix validation & button handlers. |
| 5 | Security / Usability  | Very Weak Password Policy                        | All users share the same simple password "secret_sauce". No complexity requirements, no rate limiting or CAPTCHA on failed logins. | Observed during all login attempts                                                  | Medium   | High brute-force risk in real app. Enforce strong passwords + protections. |
| 6 | Accessibility         | Missing Alt Text & Poor Keyboard Navigation      | Product images lack meaningful alt text (screen readers say "undefined"). Checkout form has focus issues on mobile when using keyboard/talkback. | 1. Use screen reader (VoiceOver/NVDA)<br>2. Tab through checkout form on mobile     | Medium   | WCAG violation. Add proper alt text and improve focus management. |

### Summary & Recommendations
The site works correctly with the **standard_user**, but the different credential types intentionally introduce bugs to simulate real-world QA challenges.

**Key improvement areas**:
- Performance optimization (especially for slow networks/devices)
- Better error recovery & user feedback
- Proper accessibility implementation (alt text, keyboard navigation)
- Stronger authentication/security practices in production

These findings provide valuable insights into how different user profiles can reveal critical quality issues.
