import { db } from "@/utils/firebase/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export async function createUser({ accountId, name, username }) {
  try {
    const user = await addDoc(collection(db, "users"), {
      accountId,
      name,
      username,
    });

    return user;
  } catch (error) {
    throw error;
  }
}
