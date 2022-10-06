@iosApp @androidApp
Feature: Import Wallet
  Users  can use the app to import an existing wallet or create a new one.

  Scenario: Import Wallet - Manual input SR
    After a user completes the onboarding process then they are presented
    with the option to create a new wallet and back it up.

    Given I just installed MetaMask on my device
    When I launch MetaMask mobile app
    Then "METAMASK" is displayed
    When I tap "Get started"
    Then "Wallet setup" is displayed
    When I tap "Import using Secret Recovery Phrase"
    Then "Help us improve MetaMask" is displayed
    When I tap "I agree"
    Then "Import from seed" is displayed
    When I type "a valid Secret Recovery Phrase"
    And I type "a valid New password"
    And I type "a valid Confirm password"
    And I tap "Import"
    Then "Welcome to your new wallet!" is displayed
