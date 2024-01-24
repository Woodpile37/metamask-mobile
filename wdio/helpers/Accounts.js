<<<<<<< HEAD
// This is an incorrect BIP39 SRP. It uses words not in the BIP39 wordlist.
const INCORRECT_SECRET_RECOVERY_PHRASE =
  'gain lemon refuse sunny identify diesel hand endless first involve wink size';
=======
const INCORRECT_SECRET_RECOVERY_PHRASE =
  'fold media south add since false relax immense pause cloth just falcon';
const CORRECT_SECRET_RECOVERY_PHRASE =
  'fold media south add since false relax immense pause cloth just raven';
>>>>>>> upstream/testflight/4754-permission-system
const CORRECT_PASSWORD = `12345678`;
const SHORT_PASSWORD = `1234567`;
const INCORRECT_PASSWORD = `12345679`;

class Accounts {
  static getValidAccount() {
    return {
<<<<<<< HEAD
      // A correct BIP39 SRP that can be used for testing. Requires the var to be set in the environment.
      seedPhrase: process.env.MM_TEST_ACCOUNT_SRP || 'undefined SRP env var',
      // Ethereum address for 1st account of derived on the seed that can be used for testing. Requires the var to be set in the environment.
      address:
        process.env.MM_TEST_ACCOUNT_ADDRESS || 'undefined address env var',
=======
      seedPhrase: CORRECT_SECRET_RECOVERY_PHRASE,
>>>>>>> upstream/testflight/4754-permission-system
      password: CORRECT_PASSWORD,
    };
  }

  static getInvalidAccount() {
    return {
      seedPhrase: INCORRECT_SECRET_RECOVERY_PHRASE,
      password: INCORRECT_PASSWORD,
    };
  }

<<<<<<< HEAD
  static getAccountPrivateKey() {
    return {
      keys:
        process.env.MM_TEST_ACCOUNT_PRIVATE_KEY ||
        'undefined Private key env var',
    };
  }

  static getShortPasswordAccount() {
    const account = Accounts.getValidAccount();
    account.password = SHORT_PASSWORD;
    return account;
=======
  static getShortPasswordAccount() {
    return {
      seedPhrase: CORRECT_SECRET_RECOVERY_PHRASE,
      password: SHORT_PASSWORD,
    };
>>>>>>> upstream/testflight/4754-permission-system
  }
}

export default Accounts;
