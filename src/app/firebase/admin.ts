import * as admin from 'firebase-admin';

export function initFirebaseAdmin() {
  if (!admin.apps.length) {
    const serviceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT!
    ) as admin.ServiceAccount;

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.REALTIME_DATABASE_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
  }

  return admin;
}

// Call init before exporting services
const adminApp = initFirebaseAdmin();

export const db = adminApp.database();
export const bucket = adminApp.storage().bucket();
export const auth = adminApp.auth();
