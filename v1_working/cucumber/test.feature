Feature: Arithmetic Operations
  As a user of the calculator
  I would like access to basic arithmetic operations
  So that I can perform simple calculations

  Scenario: Add numbers
    Given The calculator is open
     When I calculate 1 + 2
     Then the result should equal 3