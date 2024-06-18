import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { toast } from "sonner";

export function useDataID() {
  async function getRecipeElements(colName, id) {
    const docRef = doc(db, colName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      toast.info("Bunday ma'lumot topilmadi");
    }
  }

  return { getRecipeElements };
}
