import idb from 'idb';

function indexedDBConnection() {
  if (!('indexedDB' in window)) {
    return false;
  }
  const dbPromise = idb.open('todoDB', 1, upgradeDb => {
    if (!upgradeDb.objectStoreNames.contains('todoStore')) {
      const todoObjectStore = upgradeDb.createObjectStore('todoStore', { keyPath: 'id' });
      todoObjectStore.createIndex('id', 'id', { unique: true });
    }
  });
  return dbPromise;
}

export default indexedDBConnection;
