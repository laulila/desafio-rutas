import 'dotenv/config';

import {
  initializeApp,
  applicationDefault,
  cert
} from 'firebase-admin/app';

import { getFirestore } from 'firebase-admin/firestore';

let credencial;

if (process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) {
  const credenciales = Buffer.from(
    process.env.FIREBASE_SERVICE_ACCOUNT_BASE64,
    'base64'
  ).toString('utf8');

  const cuentaServicio = JSON.parse(credenciales);

  credencial = cert(cuentaServicio);
} else {
  credencial = applicationDefault();
}

initializeApp({
  credential: credencial
});

const db = getFirestore();

export { db };