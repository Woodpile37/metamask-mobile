import { createStore } from 'redux';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducers';
import { migrations, version } from './migrations';
import Logger from '../util/Logger';

const MigratedStorage = {
	async getItem(key) {
		try {
			const res = await FilesystemStorage.getItem(key);

			if (res) {
				// Using new storage system
				return res;
			}
		} catch (e) {
			//
		}

		// Using old storage system, should only happen once
		try {
			const res = await AsyncStorage.getItem(key);
			//AsyncStorage.setItem(key, ''); // clear old storage
			return res;
		} catch (error) {
			Logger.error(error, { message: 'Failed to run migration' });
		}
	},
	setItem(key, value) {
		return FilesystemStorage.setItem(key, value);
	},
	removeItem(key) {
		try {
			return FilesystemStorage.removeItem(key);
		} catch (error) {
			Logger.error(error, { message: 'Failed to remove item' });
		}
	}
};

const persistConfig = {
	key: 'root',
	version,
	storage: MigratedStorage,
	stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
	migrate: createMigrate(migrations, { debug: false }),
	writeFailHandler: error => Logger.error(error, { message: 'Error persisting data' }) // Log error if saving state fails
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
