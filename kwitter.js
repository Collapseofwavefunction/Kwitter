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
function addUser()
    {
     user_name = document.getElementById("user_name").value 
     firebase.database().ref("/").child(user_name).update({
        purpose:"adding_user"
     })
     localStorage.setItem("user_name",user_name)
     window.location = "kwitter_room.html"
    }
