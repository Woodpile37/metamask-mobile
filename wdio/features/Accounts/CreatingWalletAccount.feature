@androidApp
<<<<<<< HEAD
@smoke
@accounts
Feature: Create Account

  Scenario: Import wallet
    Given the app displayed the splash animation
    And I have imported my wallet
=======
@ChainScenarios
Feature: Creating account in wallet

  Scenario: Import account
    Given I have imported my wallet
    # Given I have created my wallet
>>>>>>> upstream/testflight/4754-permission-system
    And I tap No Thanks on the Enable security check screen
    And I tap No thanks on the onboarding welcome tutorial

  Scenario: Creating a new wallet account
    Given I am on the wallet view
<<<<<<< HEAD
    When I tap on the Identicon
    Then the account list should be visible
    When I tap Create a new account
    Then I am on the new account
=======

    When I tap on the Identicon
    Then the account list should be visible

    When I tap on Create a new account
    Then A new account is created
    And I am on the new account
>>>>>>> upstream/testflight/4754-permission-system
