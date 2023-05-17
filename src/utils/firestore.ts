import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebase from "@/config/firebase";

import Project from "@/interfaces/Project.interface";

const db = getFirestore(firebase);

export async function addDocument(data: Project) {
  try {
    const docRef = await addDoc(collection(db, "projects"), data);

    console.log(`Document written with ID: ${docRef.id}`);
  } catch (e) {
    console.error(e);
  }
}

export async function getDocuments() {
  try {
    return await getDocs(collection(db, "projects"));
  } catch (e) {
    console.error(e);
  }
}
