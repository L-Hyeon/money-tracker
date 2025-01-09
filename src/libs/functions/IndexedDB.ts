// idxDB > DB > Object Store(테이블 같은 개념)

export const openDB = (
  dbName: string, // 데이터베이스 이름
  storeName: string, // Object Store 이름
  newVersion?: number // 새로운 Object Store 추가할 경우 사용
): Promise<IDBDatabase> => {
  if (!('indexedDB' in window)) {
    return Promise.reject(new Error("This browser doesn't support indexedDB"));
  }
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open(dbName, newVersion ?? 1);

    openRequest.onsuccess = e => {
      resolve((e.target as IDBRequest).result);
    };
    openRequest.onerror = e => {
      reject((e.target as IDBRequest).error);
    };
    openRequest.onupgradeneeded = e => {
      const db = (e.target as IDBRequest).result;
      // 동일 이름의 Object Store 가 존재하는지 체크
      // 이미 존재할 경우 onsuccess 호출
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName);
      }
    };
  });
};

const transactionPromise = (
  db: IDBDatabase, // open 한 데이터베이스 이름
  storeName: string, // Object Store 이름
  mode: IDBTransactionMode, // transaction 모드
  callback: (store: IDBObjectStore) => IDBRequest // CRUD 동작 적용
): Promise<IDBValidKey> => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, mode);
    const store = transaction.objectStore(storeName);
    const request = callback(store);

    request.onsuccess = e => {
      resolve((e.target as IDBRequest).result);
    };
    request.onerror = e => {
      reject((e.target as IDBRequest).error);
    };

    transaction.oncomplete = () => {
      db.close();
    };
  });
};

export const writeItemInDB = async <T>(
  dbName: string, // 데이터베이스 이름
  storeName: string, // Object Store 이름
  item: T, // 저장할 데이터
  key: IDBValidKey // 저장할 데이터의 Key 이름
): Promise<IDBValidKey> => {
  const db = await openDB(dbName, storeName);
  return transactionPromise(db, storeName, 'readwrite', store => store.put(item, key));
};

export const readItemInDB = async (dbName: string, storeName: string, key: IDBValidKey): Promise<IDBValidKey> => {
  const db = await openDB(dbName, storeName);
  return transactionPromise(db, storeName, 'readonly', store => store.get(key));
};

export const readAllInDB = async (dbName: string, storeName: string): Promise<IDBValidKey> => {
  const db = await openDB(dbName, storeName);
  return transactionPromise(db, storeName, 'readonly', store => store.getAll());
};

export const modifyItemInDB = async <T>(
  dbName: string,
  storeName: string,
  item: T,
  key: IDBValidKey
): Promise<IDBValidKey> => {
  const db = await openDB(dbName, storeName);
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const objStoreRequest = store.get(key);

    objStoreRequest.onsuccess = () => {
      const setRequest = store.put(item, key);
      setRequest.onsuccess = e => {
        resolve((e.target as IDBRequest).result);
      };
      setRequest.onerror = e => {
        reject((e.target as IDBRequest).error);
      };
    };

    transaction.oncomplete = () => {
      db.close();
    };
  });
};

export const deleteItemInDB = async (dbName: string, storeName: string, key: IDBValidKey): Promise<IDBValidKey> => {
  const db = await openDB(dbName, storeName);
  return transactionPromise(db, storeName, 'readwrite', store => store.delete(key));
};

export const clearDB = async (dbName: string, storeName: string): Promise<IDBValidKey> => {
  const db = await openDB(dbName, storeName);
  return transactionPromise(db, storeName, 'readwrite', store => store.clear());
};

export const deleteDB = (dbName: string) => {
  return new Promise((resolve, reject) => {
    const deleteRequest = indexedDB.deleteDatabase(dbName);
    deleteRequest.onsuccess = e => {
      resolve((e.target as IDBRequest).result);
    };
    deleteRequest.onerror = e => {
      reject((e.target as IDBRequest).error);
    };
  });
};

const getCurrentDBVersion = (dbName: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName);

    request.onsuccess = e => {
      const db = (e.target as IDBRequest).result;
      const { version } = db;
      db.close();
      resolve(version);
    };

    request.onerror = e => {
      reject((e.target as IDBRequest).error);
    };
  });
};

export const addObjectStore = async <T>(dbName: string, newStoreName: string, item: T, key: IDBValidKey) => {
  const currentVersion = (await getCurrentDBVersion(dbName)) as number;
  const newVersion = currentVersion + 1;

  const db = await openDB(dbName, newStoreName, newVersion);
  return transactionPromise(db, newStoreName, 'readwrite', store => store.put(item, key));
};
