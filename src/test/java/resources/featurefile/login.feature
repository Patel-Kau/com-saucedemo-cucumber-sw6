Feature: Login Test
  As user I want to login into sauce demo website

  @sanity  @regression

  Scenario: User should login successfully with valid credentials
    Given I am on login page
    When  I enter email "standard_user"
    Then  I enter password "secret_sauce"
    And   I click on login button
    Then  Verify the product text on top of the page


  @smoke  @regression
  Scenario: Verify that the Six product are displayed on page
    Given I am on login page
    When  I enter email "standard_user"
    Then  I enter password "secret_sauce"
    And   I click on login button
    Then  Verify the product quantity on top of the page

