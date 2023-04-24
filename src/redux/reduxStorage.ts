import { MMKV } from 'react-native-mmkv';
import { Storage } from 'redux-persist';

const storage = new MMKV();

const reduxStorage: Storage = {
  getItem: (key: string) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  setItem: (key: string, value: any) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export default reduxStorage;
