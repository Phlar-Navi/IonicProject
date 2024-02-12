// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Step 0 : installing all the modules via npm install @angular/fire
export const environment = {
  production: false,
  //Step 1 : defining our variable with all our firebase infos
  firebase: {
    apiKey: "AIzaSyBMNfE0u56mu_Tjofn1Aw0z6t_FllJqBGc",
    authDomain: "doka-98c46.firebaseapp.com",
    projectId: "doka-98c46",
    storageBucket: "doka-98c46.appspot.com",
    messagingSenderId: "399378961279",
    appId: "1:399378961279:web:5d9b733678a1193bf5004a",
    measurementId: "G-HV4MPQE5XP"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
