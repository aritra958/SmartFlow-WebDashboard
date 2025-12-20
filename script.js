// 🔹 Firebase Config (replace with your own)
const firebaseConfig = {
  apiKey: "AIzaSyAZhuNWFUQH-Wj4J44SlIs116q2cce-Pnc",
  authDomain: "smart-flow-water-monitor.firebaseapp.com",
  databaseURL: "https://smart-flow-water-monitor-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-flow-water-monitor",
  storageBucket: "smart-flow-water-monitor.firebasestorage.app",
  messagingSenderId: "244582964526",
  appId: "1:244582964526:web:b3994012e6eba99b08aebf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

// Read flow data
db.ref("flow").on("value", (snapshot) => {
  const data = snapshot.val();
  document.getElementById("f1").innerText = data.flow1;
  document.getElementById("f2").innerText = data.flow2;
  document.getElementById("f3").innerText = data.flow3;
});

// Control valve
function openValve() {
  db.ref("valve").set({ state: 1 });
}

function closeValve() {
  db.ref("valve").set({ state: 0 });
}