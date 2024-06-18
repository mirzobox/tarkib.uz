import { useEffect, useState } from "react";
import { collection, onSnapshot} from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export function useData(colName) {
  const [data, setData] = useState(null);
  const col = collection(db, colName);

  useEffect(() => {
    const unsubscribe = onSnapshot(col, (snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        const each = { id: doc.id, ...doc.data() };
        results.push(each);
      });
      setData(results);
    });

    return () => unsubscribe();
  }, []);

  return { data };
}
