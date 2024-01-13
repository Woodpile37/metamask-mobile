'use strict';
import TestHelpers from '../../helpers';
import { SmokeCore } from '../../tags';
import Browser from '../../pages/Browser';
import { BROWSER_SCREEN_ID } from '../../../wdio/screen-objects/testIDs/BrowserScreen/BrowserScreen.testIds';
import TabBarComponent from '../../pages/TabBarComponent';
import { loginToApp } from '../../viewHelper';
import FixtureBuilder from '../../fixtures/fixture-builder';
import {
  loadFixture,
  startFixtureServer,
  stopFixtureServer,
} from '../../fixtures/fixture-helper';
import FixtureServer from '../../fixtures/fixture-server';
import { getFixturesServerPort } from '../../fixtures/utils';

const PHISHING_SITE = 'http://www.empowr.com/FanFeed/Home.aspx';
const INVALID_URL = 'https://quackquakc.easq';
const TEST_DAPP = 'https://metamask.github.io/test-dapp/';
const fixtureServer = new FixtureServer();

describe(SmokeCore('Browser Tests'), () => {
  beforeAll(async () => {
    await TestHelpers.reverseServerPort();
    const fixture = new FixtureBuilder().build();
    await startFixtureServer(fixtureServer);
    await loadFixture(fixtureServer, { fixture });
    await device.launchApp({
      launchArgs: { fixtureServerPort: `${getFixturesServerPort()}` },
    });
    await loginToApp();
  });

  afterAll(async () => {
    await stopFixtureServer(fixtureServer);
  });

  beforeEach(() => {
    jest.setTimeout(150000);
  });

  it('should navigate to browser', async () => {
    await TabBarComponent.tapBrowser();
    // Check that we are on the browser screen
    await Browser.isVisible();
  });

  it('should connect to the test dapp', async () => {
    await TestHelpers.delay(3000);
    // Tap on search in bottom navbar
    await Browser.tapUrlInputBox();
    await Browser.navigateToURL(TEST_DAPP);
    await Browser.waitForBrowserPageToLoad();
  });

  it('should add the test dapp to favorites', async () => {
    // Check that we are still on the browser screen
    await Browser.isVisible();
    // Tap on options
    await Browser.tapOptionsButton();
    await Browser.tapAddToFavoritesButton();
    await Browser.isAddBookmarkScreenVisible();
    await Browser.tapAddBookmarksButton();
    await Browser.isAddBookmarkScreenNotVisible(); // Add bookmark screen should not be visible
  });

  it('tap on home button', async () => {
    // Tap on home on bottom navbar
    await Browser.tapHomeButton();
    // Wait for page to load
    await TestHelpers.delay(1000);
    await Browser.isVisible();
  });

  it('should tap on the test dapp in favorites', async () => {
    if (device.getPlatform() === 'ios') {
      // Tapping on favourite iOS
      await TestHelpers.tapAtPoint(BROWSER_SCREEN_ID, { x: 174, y: 281 });
      await Browser.waitForBrowserPageToLoad();
    } else {
      // Tapping on favorite tap on Android
      await TestHelpers.tapAtPoint(BROWSER_SCREEN_ID, { x: 274, y: 223 });
      await TestHelpers.tapAtPoint(BROWSER_SCREEN_ID, { x: 180, y: 275 });
      await Browser.waitForBrowserPageToLoad();
    }
    await Browser.isURLBarTextTestDapp();
    await Browser.isVisible();
  });

  it('should test invalid URL', async () => {
    await TestHelpers.delay(2000);
    await Browser.tapBottomSearchBar();
    // Clear text & Navigate to URL
    await Browser.navigateToURL(INVALID_URL);
    await Browser.waitForBrowserPageToLoad();
    await Browser.tapReturnHomeButton();
    // Check that we are on the browser screen
    await TestHelpers.delay(1500);
    await Browser.isVisible();
  });

  it('should test phishing sites', async () => {
    await Browser.tapBottomSearchBar();
    // Clear text & Navigate to URL
    await Browser.navigateToURL(PHISHING_SITE);
    await Browser.waitForBrowserPageToLoad();
    await Browser.isBackToSafetyButtonVisible();
    await Browser.tapBackToSafetyButton();
    // Check that we are on the browser screen
    await TestHelpers.delay(1500);
    await Browser.isVisible();
  });
<<<<<<< Updated upstream
	beforeEach(() => {
		jest.setTimeout(150000);
	});

	it('should create new wallet', async () => {
		await OnboardingCarouselView.isVisible();
		await OnboardingCarouselView.tapOnGetStartedButton();

		await OnboardingView.isVisible();
		await OnboardingView.tapCreateWallet();

		await MetaMetricsOptIn.isVisible();
		await MetaMetricsOptIn.tapAgreeButton();

		await CreatePasswordView.isVisible();
		await CreatePasswordView.enterPassword(PASSWORD);
		await CreatePasswordView.reEnterPassword(PASSWORD);
		await CreatePasswordView.tapIUnderstandCheckBox();
		await CreatePasswordView.tapCreatePasswordButton();
	});

	it('Should skip backup check', async () => {
		// Check that we are on the Secure your wallet screen
		await ProtectYourWalletView.isVisible();
		await ProtectYourWalletView.tapOnRemindMeLaterButton();

		await SkipAccountSecurityModal.tapIUnderstandCheckBox();
		await SkipAccountSecurityModal.tapSkipButton();
		await WalletView.isVisible();
	});

	it('should dismiss the onboarding wizard', async () => {
		// dealing with flakiness on bitrise.
		await TestHelpers.delay(1000);
		try {
			await OnboardingWizardModal.isVisible();
			await OnboardingWizardModal.tapNoThanksButton();
			await OnboardingWizardModal.isNotVisible();
		} catch {
			//
		}
	});

	it('should dismiss the protect your wallet modal', async () => {
		await ProtectYourWalletModal.isCollapsedBackUpYourWalletModalVisible();
		await TestHelpers.delay(1000);

		await ProtectYourWalletModal.tapRemindMeLaterButton();

		await SkipAccountSecurityModal.tapIUnderstandCheckBox();
		await SkipAccountSecurityModal.tapSkipButton();

		await WalletView.isVisible();
	});

	it('should navigate to browser', async () => {
		await WalletView.tapDrawerButton();

		await DrawerView.isVisible();
		await DrawerView.tapBrowser();
		// Check that we are on the browser screen
		await Browser.isVisible();
	});

	it('should go to first explore tab and navigate back to homepage', async () => {
		// This can only be done on Android since we removed option for iOS due to Appstore
		if (!device.getPlatform() === 'android') {
			// Tap on first category
			await TestHelpers.tapAtPoint(BROWSER_SCREEN_ID, { x: 100, y: 425 });
			// Tap on first option
			await TestHelpers.tapAtPoint(BROWSER_SCREEN_ID, { x: 80, y: 100 });
			// Tap back button
			await Browser.tapBrowserBackButton();
			await Browser.tapBrowserBackButton();
			await TestHelpers.delay(1000);
			// Check that we are on the browser screen
			await Browser.isVisible();
		}
	});

	it('should go to uniswap', async () => {
		await TestHelpers.delay(3000);
		// Tap on search in bottom navbar
		await Browser.tapBrowser();
		await Browser.navigateToURL(UNISWAP);

		// Wait for page to load
		await Browser.waitForBrowserPageToLoad();

		if (device.getPlatform() === 'android') {
			// Check that the dapp title is correct
			await TestHelpers.checkIfElementWithTextIsVisible('app.uniswap.org', 0);
		}
		await TestHelpers.delay(3000);
		await ConnectModal.tapCancelButton();

		// Android has weird behavior where the URL modal stays open, so this closes it
		// Close URL modal
		if (device.getPlatform() === 'android') {
			await device.pressBack();
		}
		await Browser.isVisible();
	});

	it('should add uniswap to favorites', async () => {
		// Check that we are still on the browser screen
		await Browser.isVisible();
		// Tap on options
		await Browser.tapOptionsButton();
		await Browser.tapAddToFavoritesButton();
		await Browser.isAddBookmarkScreenVisible();
		await Browser.tapAddBookmarksButton();

		await Browser.isAddBookmarkScreenNotVisible(); // Add bookmark screen should not be visible
	});

	it('should go back home', async () => {
		// Tap on home on bottom navbar
		await Browser.tapHomeButton();
		// Wait for page to load
		await TestHelpers.delay(1000);
		await Browser.isVisible();
	});
	it('should navigate to favorites', async () => {
		if (device.getPlatform() === 'ios') {
			await Browser.tapOptionsButton();
			await Browser.tapOpenTabButton();

			// Tapping on favourite tap
			await TestHelpers.tapAtPoint(BROWSER_SCREEN_ID, { x: 174, y: 281 });
			await TestHelpers.delay(1500);
		} else {
			// Tapping on favourite tap on Android
			await TestHelpers.tapAtPoint(BROWSER_SCREEN_ID, { x: 274, y: 223 });
			await TestHelpers.tapAtPoint(BROWSER_SCREEN_ID, { x: 180, y: 275 });
			await TestHelpers.delay(1500);
		}
		// Wait for connect prompt to display
		await TestHelpers.delay(3000);
		await ConnectModal.tapConnectButton();
		await Browser.isVisible();
	});

	it('should test ENS sites', async () => {
		// Tap on home on bottom navbar
		await Browser.tapHomeButton();
		await TestHelpers.delay(1000);

		await Browser.tapBottomSearchBar();

		// Navigate to ENS URL
		await Browser.navigateToURL(ENS_Example);
		await Browser.isVisible();

		await Browser.tapBottomSearchBar();
		// Navigate to URL
		await Browser.navigateToURL(ENS_TLD);
		await Browser.isVisible();
	});

	it('should test phishing sites', async () => {
		await Browser.tapBottomSearchBar();
		// Clear text & Navigate to URL
		await Browser.navigateToURL(PHISHING_SITE);
		await Browser.waitForBrowserPageToLoad();

		await Browser.isBackToSafetyButtonVisible();
		await Browser.tapBackToSafetyButton();

		// Check that we are on the browser screen
		if (!device.getPlatform() === 'android') {
			await TestHelpers.delay(1500);
		}
		await Browser.isVisible();
	});
=======
>>>>>>> Stashed changes
});
