Feature: Validating if string is pangram

  	Scenario: Post a valid pangram string with 26 or more ASCII characters
    Given I make POST request with string "abcdefghijklmnopqrstuvwxyz"
    Then I verify status code returned is 200, content type is "application/json" and response body "pangram" should contain "true"
    
    Scenario: Post a valid pangram string with 26 or more ASCII characters that starts with empty space
    Given I make POST request with string " abcdefghijklmnopqrstuvwxyz"
    Then I verify status code returned is 200, content type is "application/json" and response body "pangram" should contain "true"
    
    Scenario: Post an invalid pangram string with 26 or more ASCII characters
    Given I make POST request with string "abcdefghijklmnopqrstuvwxyyy"
    Then I verify status code returned is 200, content type is "application/json" and response body "pangram" should contain "false"
    
    Scenario: Post an invalid pangram string with 26 or more ASCII characters with space instead of 1 missing character
    Given I make POST request with string "abcdefghijklmnopqrstuvwxy "
    Then I verify status code returned is 200, content type is "application/json" and response body "pangram" should contain "false"
    
    Scenario: Post an invalid pangram string with 26 or more ASCII characters with 2 special characters instead of 2 missing characters
    Given I make POST request with string "abcdefghijklmnopqrstuvwx % %"
    Then I verify status code returned is 200, content type is "application/json" and response body "pangram" should contain "false"
    
    Scenario: Post an invalid pangram string with less than 26 ASCII characters long
    Given I make POST request with string "abcdefghijklmnopqrstuv"
    Then I verify status code returned is 404, content type is "application/json" and response body "message" should contain "Not Enough Characters In String"
    
    #Scenario: Post an invalid pangram string with 26 or more non-ASCII characters
    #Given I make POST request with string "The quick brown fox jumped over the lazy brown dog"
    #Then Status code returned is 200, content type is "application/json" and response body should contain "false"