// Firebase init
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "smart-flow-water-mor.firebaseapp.com",
  databaseURL: "https://smart-flow-water-mor-default-rtdb.firebaseio.com",
  projectId: "smart-flow-water-mor",
  storageBucket: "smart-flow-water-mor.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Correct path
const flowRef = db.ref("flow");

flowRef.on("value", (snapshot) => {
  if (!snapshot.exists()) {
    console.log("❌ No data at /flow");
    return;
  }

  const data = snapshot.val();
  console.log("🔥 Firebase Data:", data);

  // ✅ FIXED IDs
  document.getElementById("f1").innerText = data.flow1 ?? 0;
  document.getElementById("f2").innerText = data.flow2 ?? 0;
  document.getElementById("f3").innerText = data.flow3 ?? 0;

  document.getElementById("lastUpdate").innerText =
    "Last updated: " + new Date().toLocaleTimeString();
});