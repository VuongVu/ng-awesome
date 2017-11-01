// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDvxU03SUff2Az9_Q8ze77OSPKrANQ5Xs4',
    authDomain: 'ng-awesome.firebaseapp.com',
    databaseURL: 'https://ng-awesome.firebaseio.com',
    projectId: 'ng-awesome',
    storageBucket: 'ng-awesome.appspot.com',
    messagingSenderId: '476768775683',
  },
};
