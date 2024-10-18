import { openDB } from "idb";

const DATABASE_NAME = "vagasDB";
const STORE_NAME = "vagas";

export const initDB = async () => {
  return openDB(DATABASE_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });
};

// Função para adicionar uma nova vaga
export const addVaga = async (vaga: any) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  await store.add(vaga);
  await tx.done;
};

// Função para buscar todas as vagas
export const getVagas = async () => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  return store.getAll();
};

// Função para deletar uma vaga
export const deleteVaga = async (id: string) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  await store.delete(id);
  await tx.done;
};
