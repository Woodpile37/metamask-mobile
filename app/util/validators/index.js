import { ethers } from 'ethers';
import Encryptor from '../../core/Encryptor';
<<<<<<< Updated upstream
=======
import { regex } from '../regex';
>>>>>>> Stashed changes

export const failedSeedPhraseRequirements = (seed) => {
  const wordCount = seed.split(/\s/u).length;
  return wordCount % 3 !== 0 || wordCount > 24 || wordCount < 12;
};

/**
<<<<<<< Updated upstream
 * This method validates and decyrpts a raw vault. Only works with iOS/Android vaults!
 * The extension uses different cryptography for the vault.
 * @param {string} password - users password related to vault
 * @param {string} vault - exported from ios/android filesytem
=======
 * This method validates and decrypts a raw vault. Only works with iOS/Android vaults!
 * The extension uses different cryptography for the vault.
 * @param {string} password - users password related to vault
 * @param {string} vault - exported from ios/android filesystem
>>>>>>> Stashed changes
 * @returns seed phrase from vault
 */
export const parseVaultValue = async (password, vault) => {
  let vaultSeed;

  if (vault[0] === '{' && vault[vault.length - 1] === '}')
    try {
      const seedObject = JSON.parse(vault);
      if (
        seedObject?.cipher &&
        seedObject?.salt &&
        seedObject?.iv &&
        seedObject?.lib
      ) {
        const encryptor = new Encryptor();
        const result = await encryptor.decrypt(password, vault);
        vaultSeed = result[0]?.data?.mnemonic;
      }
    } catch (error) {
      //No-op
    }
  return vaultSeed;
};

export const parseSeedPhrase = (seedPhrase) =>
<<<<<<< Updated upstream
  (seedPhrase || '').trim().toLowerCase().match(/\w+/gu)?.join(' ') || '';
	let vaultSeed;

	if (vault[0] === '{' && vault[vault.length - 1] === '}')
		try {
			const seedObject = JSON.parse(vault);
			if (seedObject?.cipher && seedObject?.salt && seedObject?.iv && seedObject?.lib) {
				const encryptor = new Encryptor();
				const result = await encryptor.decrypt(password, vault);
				vaultSeed = result[0]?.data?.mnemonic;
			}
		} catch (error) {
			//No-op
		}
	return vaultSeed;
};

export const parseSeedPhrase = (seedPhrase) => (seedPhrase || '').trim().toLowerCase().match(/\w+/gu)?.join(' ') || '';
=======
  (seedPhrase || '').trim().toLowerCase().match(regex.seedPhrase)?.join(' ') ||
  '';
>>>>>>> Stashed changes

export const { isValidMnemonic } = ethers.utils;
