import { Injectable } from '@angular/core';

import * as firebase from "firebase/app";
import 'firebase/firestore';

import { Constants } from 'src/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public database: firebase.firestore.Firestore;

  constructor() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: Constants.Firebase.FirebaseApiKey,
      authDomain: Constants.Firebase.FirebaseAuthDomain,
      databaseURL: Constants.Firebase.FirebaseDatabaseURL,
      projectId: Constants.Firebase.FirebaseProjectId,
      storageBucket: Constants.Firebase.FirebaseStorageBucket,
      messagingSenderId: Constants.Firebase.FirebaseMessagingSenderId,
      appId: Constants.Firebase.FirebaseAppId,
      measurementId: Constants.Firebase.FirebaseMeasurementId
    };


    if (!firebase.apps.length) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      // firebase.analytics();
    }

    this.database = firebase.firestore();
  }
}