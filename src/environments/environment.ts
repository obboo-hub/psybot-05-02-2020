// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  
  firebase: {
    apiKey: "AIzaSyBWMdDptg82YiZ6T-ABO9SGFrW2TsQBg6Y",
    authDomain: "angularbot-xriovy.firebaseapp.com",
    databaseURL: "https://angularbot-xriovy.firebaseio.com",
    projectId: "angularbot-xriovy",
    storageBucket: "angularbot-xriovy.appspot.com",
    messagingSenderId: "601277311561",
    
  },

  dialogflow: {
    angularBot: 'bebc2fe17ce14cb58cb6cfaf534a1c93'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
