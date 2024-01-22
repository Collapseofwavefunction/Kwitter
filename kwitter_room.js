
const firebaseConfig = {
      apiKey: "AIzaSyDKBlfCBKknlGQS0zf8csG4HJW93VvCjAU",
      authDomain: "kwitter-63b5c.firebaseapp.com",
      databaseURL: "https://kwitter-63b5c-default-rtdb.firebaseio.com",
      projectId: "kwitter-63b5c",
      storageBucket: "kwitter-63b5c.appspot.com",
      messagingSenderId: "838632013399",
      appId: "1:838632013399:web:a6933114e0c59d0fa0ed12"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!"

function addRoom()
{
      room_name = document.getElementById("room_name").value 
      localStorage.setItem("room_name",room_name)
      window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}