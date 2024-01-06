var firebaseConfig = {
    apiKey: "AIzaSyB8OySvgSbXVqHzl1DCR48E-EeSz8HK450",
    authDomain: "kwitter-app-72f52.firebaseapp.com",
    databaseURL: "https://kwitter-app-72f52-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-72f52",
    storageBucket: "kwitter-app-72f52.appspot.com",
    messagingSenderId: "211438404695",
    appId: "1:211438404695:web:ae49faa6f6fc37026e8f12",
    measurementId: "G-DBRS0N0DNE"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
  user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
  }

  );
}