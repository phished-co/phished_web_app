import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import GithubProvider from 'next-auth/providers/github';

import * as firestoreFunctions from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: FirebaseAdapter({
    db: db,
    ...firestoreFunctions,
    // apiKey: process.env.FIREBASE_API_KEY,
    // appId: process.env.FIREBASE_APP_ID,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // // databaseURL: process.env.FIREBASE_DATABASE_URL,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  }),
};
export default NextAuth(authOptions)