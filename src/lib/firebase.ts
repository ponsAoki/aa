import {
  apiKey,
  appId,
  authDomain,
  databaseURL,
  messagingSenderId,
  mesurementId,
  projectId,
  storageKey,
} from "@/constants/env";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

console.log(apiKey, databaseURL);

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageKey,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: mesurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
