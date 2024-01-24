<<<<<<< HEAD
@androidApp
@regression
@onboarding
Feature: Onboarding Import Wallet
  Users can use the app to import an existing wallet or create a new one.

  Scenario: Get Started
    Given the Welcome Screen is displayed
    When I tap "Get started"
    Then Wallet setup screen is displayed
    When I tap "Import using Secret Recovery Phrase"
    Then "Help us improve MetaMask" is displayed
    And On Wallet Setup Screen I tap "Agree"
    Then Terms of Use is displayed
    When I agree to terms
    Then Terms of Use is not displayed
    And "Import from Secret Recovery Phrase" is displayed

  Scenario Outline: Password Strength
    When I type <password> in new password field
    Then password strength <strength> is displayed
    Examples:
      | password        | strength                  |
      | metapass1       | Password strength: Weak   |
      | Metapass12345   | Password strength: Good   |
      | Metapass12345!@ | Password strength: Strong |

  Scenario Outline: Password Matching
    When I type <password> in confirm password field
    Then green check mark is displayed
    Examples:
      | password        |
      | Metapass12345!@ |

  Scenario Outline: Invalid SRP
    When I type <invalid_SRP> in SRP field
    And I tap "Import"
    Then device alert <error> is displayed
    And I tap Yes on alert
    Examples:
      | invalid_SRP                                                              | error                                                       |
      | fold media south not valid secret recovery phrase pause cloth just raven | Invalid Secret Recovery Phrase                              |
      | fold media south add since false relax immense pause cloth just          | Secret Recovery Phrases contain 12, 15, 18, 21, or 24 words |

  Scenario Outline: Import Wallet
    When I type <SRP> in SRP field
    And I type <password> in confirm password field
    And I tap "Import"
    And I tap No Thanks on the Enable security check screen
    And I tap No thanks on the onboarding welcome tutorial
    Then I am on the main wallet view
    Examples:
      | SRP                                                                   | password        |
      | fold media south add since false relax immense pause cloth just raven | Metapass12345!@ |
=======
@iosApp
@androidApp
Feature: Import Wallet
  Users  can use the app to import an existing wallet or create a new one.

  Scenario Outline: Import Wallet - Manual input SR
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

    When I type <SRP> in SRP field
    And I type <password> in new password field
    And I type <password> in confirm password field
    And I tap "Import"
    Then "Welcome to your new wallet!" is displayed

    Examples:
      | SRP                                                                   | password  |
      | fold media south add since false relax immense pause cloth just raven | metapass1 |
>>>>>>> upstream/testflight/4754-permission-system
