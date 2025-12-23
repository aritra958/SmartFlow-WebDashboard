// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "smart-flow-water-mor.firebaseapp.com",
  databaseURL: "https://smart-flow-water-mor-default-rtdb.firebaseio.com",
  projectId: "smart-flow-water-mor",
  storageBucket: "smart-flow-water-mor.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to database
const db = firebase.database();

// Reference EXACT path
const flowRef = db.ref("flow");

// Listen for data
flowRef.on("value", (snapshot) => {
  if (!snapshot.exists()) {
    console.log("❌ No data found at /flow");
    return;
  }

  const data = snapshot.val();
  console.log("🔥 Firebase Data:", data);

  // Update UI
  document.getElementById("flow1").innerText = data.flow1 ?? 0;
  document.getElementById("flow2").innerText = data.flow2 ?? 0;
  document.getElementById("flow3").innerText = data.flow3 ?? 0;

  document.getElementById("lastUpdate").innerText =
    new Date().toLocaleTimeString();
});