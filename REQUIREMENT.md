# BANK IFSC

Make web App in which we can get bank information based on IFSC code.

## API to be used:
    https://api.techm.co.in/api/v1/ifsc/{IFSC_CODE}

## Acceptance Criteria:

1. Should be able to search bank based on IFSC code using input field.

        1.1 Negative Scenario:

            a. Should display message to indicate incorrect IFSC code.
            b. Should display message to indicate that IFSC code is in incorrect format.
            
        1.2 Positive Scenario:

            a. If IFSC code is correct and valid, then display information of bank in table and store it in table.

                * If IFSC code is present in table don't make API call.
                * If IFSC code is not in table make API call.

2. Should be able to sorting columns of table.
3. Should be able to filter the data in table.
4. Should be able to Handle all the errors and exceptions.
5. App should not break.
6. Data should be persistent on refresh