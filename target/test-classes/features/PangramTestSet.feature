Feature: Validating if string is pangram

  Scenario Outline: Post a valid pangram string with 26 or more ASCII characters
    Given I make POST request with string "<string>"
    Then I verify status code returned is 200, content type is "application/json" and response body "<key>" should contain "<value>"

    Examples: 
      | string                        | key     | value |
      | abcdefghijklmnopqrstuvwxyz    | pangram | true  |
      | .abcdefghijklmnopqrstuvwxyz   | pangram | true  |
      | abcdefghijklmnopqrstuvwxyzABC | pangram | true  |

  Scenario Outline: Post an invalid pangram string with 26 or more ASCII characters
    Given I make POST request with string "<string>"
    Then I verify status code returned is 200, content type is "application/json" and response body "<key>" should contain "<value>"

    Examples: 
      | string                        | key     | value |
      | %bcdefghijklmnopqrstuvwxyZ    | pangram | false |
      | abcdefghijklmnopqrstuvwxyyyyy | pangram | false |
      | $$cdefghijklmnopqrstuvwxyz    | pangram | false |
      | acdefghijklmnopqrstuvwx%%aa   | pangram | false |
      | acdefghijklmnopqrstuvwx% %    | pangram | false |
