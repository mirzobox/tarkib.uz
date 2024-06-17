import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { useState } from "react";

export function useAddData() {
  const [isPending, setIsPending] = useState(false);
  const addNewDoc = async (colName, data) => {
    setIsPending(true);
    await addDoc(collection(db, colName), {
      ...data,
    });
    setIsPending(false);
  };

  return { addNewDoc, isPending };
}
