## Part 2: Regression Testing

### Approach
The e-commerce application has been updated and time for testing is very limited.  
The goal is to create a focused **regression plan** by selecting the most critical test cases from Part 1 and justifying the choices to prioritize high-risk areas under time constraints.

**Selection criteria:**
- **Risk**: High-impact areas (payment, order confirmation, core flow)
- **Change likelihood**: Areas most likely affected by recent updates (validation logic, UI, responsiveness)
- **Coverage**: Mix of positive and negative paths + cross-device check
- **Efficiency**: Reuse Part 1 test cases; target 7–8 cases to fit a short testing window

**Justification**  
Focus is placed on the **end-to-end happy path** (successful purchase) and the **most common failure points** (input validation & errors).  
Payment-related cases are prioritized due to financial impact.  
Responsiveness is included because the application must work well on both desktop and mobile.  
Less critical edge cases (e.g. maximum input lengths – TC-017) are deprioritized for this short regression cycle.

**Total estimated execution time**: ~1–1.5 hours per device  
(Positive paths first as a quick smoke test, followed by negative cases)

### Selected Test Cases for Regression Plan

Run in this priority order: Positive paths → Negative paths → Cross-device check

| Priority | Test Case ID | Description                                      | Reason for Inclusion                                      |
|----------|--------------|--------------------------------------------------|-----------------------------------------------------------|
| 1        | TC-001       | Add items to cart and proceed to checkout (positive) | Critical core flow; verifies basic navigation post-update |
| 2        | TC-002       | Enter valid shipping address                     | Most frequent user interaction; real-time validation      |
| 3        | TC-003       | Enter invalid shipping address (missing fields)  | Common user error; graceful error handling is essential   |
| 4        | TC-006       | Enter valid billing address                      | Completes address section; frequent path                  |
| 5        | TC-007       | Enter invalid billing address                    | Covers error handling in billing                          |
| 6        | TC-008       | Enter valid payment information                  | Highest business risk – financial data & transaction      |
| 7        | TC-010       | Enter invalid payment information (format errors)| Critical validation; prevents incorrect charges           |
| 8        | TC-011       | Review order summary                             | Final verification step before payment                    |
| 9        | TC-012       | Complete purchase (positive)                     | End-to-end success; confirmation page & order integrity   |
| 10       | TC-016       | Responsiveness: Mobile vs Desktop                | Must work on all devices; frequent source of regressions  |

**Notes**  
- Positive cases are executed first to quickly confirm the main flow still works.  
- Negative cases focus on the most frequent user mistakes (missing fields, wrong formats).  
- Payment validation receives extra attention due to its direct revenue impact.  
- Responsiveness check (TC-016) is mandatory because the challenge explicitly requires desktop + mobile support.

This selection covers ~80% of the critical risk surface while respecting severe time constraints.
