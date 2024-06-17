import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export function useData(colName) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const col = collection(db, colName);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onSnapshot(col, (snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        const todo = { id: doc.id, ...doc.data() };
        results.push(todo);
      });
      setData(results);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { data, isLoading };
}
