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
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom() {
      room_name = document.getElementById("room_name").value
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  firebase_message_id = childKey
                  message_data = childData
                  //Start code
                  console.log("Room_name -" + Room_names)
                  row = "<div class='room_name'id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML = row
                  console.log(firebase_message_id)
                  console.log(message_data)
                  name = message_data["name"]
                  message = message_data["message"]
                  like = message_data["like"]
                  name_with_tag = "<h4>" + name + "<img class='user.tick' src='tick.png> </h4>"
                  message_with_tag = "<h4 class= message_h4>" + message + "</h4>"
                  like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + "onclick='updatelike(this.id)'>"
                  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up' like:" + like + "</span></button><hr>"

                  row = name_with_tag + message_with_tag + like_button + span_with_tag
                  document.getElementById("output").innerHTML = row
                  //End code
            });
      });
}
getData();

function updatelikes(message_id)
{
      console.log("clicked on like button-"+message_id)
      button_id = message_id
      likes = document.getElementById(button_id).value
      updatedlikes = Number(likes) + 1
      console.log(updatedlikes)

      firebase.database().ref(Room_names).child(message_id).update({
            likes : updatedlikes
      })
}

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("name", name)
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}