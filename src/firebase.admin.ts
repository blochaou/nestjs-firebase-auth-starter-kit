import * as firebase from 'firebase-admin';
import { FIREBASE_SERVICE_PATH, FIREBASE_ADMIN } from './constantes';

firebase.initializeApp({
    credential: firebase.credential.cert(require(FIREBASE_SERVICE_PATH)),
});

export const firebaseAdminFactory = {
    provide: FIREBASE_ADMIN,
    useValue: firebase,
};
