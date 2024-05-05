const firebaseConfig = {
  apiKey: "AIzaSyB8RN6ctpTxtl51yLBDSd1lebdlOByS6SU",
  authDomain: "kwitter-d9d0b.firebaseapp.com",
  databaseURL: "https://kwitter-d9d0b-default-rtdb.firebaseio.com",
  projectId: "kwitter-d9d0b",
  storageBucket: "kwitter-d9d0b.appspot.com",
  messagingSenderId: "56992993752",
  appId: "1:56992993752:web:383fea3bb1e43b802d22ad"
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
