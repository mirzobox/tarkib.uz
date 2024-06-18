import { useEffect, useState } from "react";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export function useDataUID(colName) {
  const [documents, setDocuments] = useState(null);
  const q = query(
    collection(db, colName),
    where("uid", "==", localStorage.getItem("uid")),
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        results.push(data);
      });
      setDocuments(results);
    });

    return () => unsubscribe();
  }, []);

  return documents;
}
