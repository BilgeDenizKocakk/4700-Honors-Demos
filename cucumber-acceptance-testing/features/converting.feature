Feature: Convert a number to foobarbaz.

  Scenario Outline: A number is successfully converted to foobarbaz.
    Given num is <number>
    When I ask for a conversion
    Then I should be told "<answer>"

  Examples:
    | number     | answer     |
    | 0          | foobarbaz  |
    | 3          | foo        |
    | 5          | bar        |
    | 7          | baz        |
    | 15         | foobar     |
    | 21         | foobaz     |
    | 35         | barbaz     |
    | 105        | foobarbaz  |
    | 1          | 1          |




