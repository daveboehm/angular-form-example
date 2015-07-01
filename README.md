# angular-form-example
An example of a typical form with real time validation using angular 1.3.12

This form will validate a field on blur. 

First and Last Name fields must be at least 2 characters long and are required.

Username must be at least 4 characters long and is required.

Email must be valid format (uses Angular's built-in validator for this) and is required.

Phone number must be proper format. This field is not required and is validated using ng-pattern regex string.

URL must be in proper format, but is not required. Proper format includes the full "HTTP" address. Starting with www will return invalid.

Password and Confirm Password fields must match, be at least 5 characters, and no more than 16 characters

Message field is optional and not validated.

Submit button becomes enabled when all fields (aka the form) are valid.
