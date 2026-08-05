// ---------------------------------------------------------
// config.example.js
// ---------------------------------------------------------
// This is a template for your API keys.
// DO NOT enter your actual keys here if you upload this file to GitHub!
// Instead, copy this file to 'config.js' and enter your keys there.
// ('config.js' is ignored by Git, so it will remain private on your computer)

window.CONFIG = {
  // Firebase configuration
  firebase: `const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebasedatabase.app",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};`,

  // Google Sheets webhook URL for syncing words
  sheet: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
};
