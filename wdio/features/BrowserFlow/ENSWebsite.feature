@androidApp
@regression
@browser
@smoke
Feature: Browser ENS Website

  Scenario: ENS website loads correctly
<<<<<<< HEAD
  Navigate to ENS website using browser address bar.
    Given the app displayed the splash animation
    And I have imported my wallet
=======
    Navigate to ENS website using browser address bar.

    Given I have imported my wallet
>>>>>>> upstream/testflight/4754-permission-system
    And I tap No Thanks on the Enable security check screen
    And I tap No thanks on the onboarding welcome tutorial
    And I navigate to the browser
    And I am on Home MetaMask website
<<<<<<< HEAD
    When I navigate to "https://brunobarbieri.eth.link"
=======

    When I navigate to "https://brunobarbieri.eth"
>>>>>>> upstream/testflight/4754-permission-system
    Then the webpage should load successfully
