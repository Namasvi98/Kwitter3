var firebaseConfig = {
  apiKey: "AIzaSyCdn0Tt8EflWIhTU9bFFFE4aVD05XlOOFg",
  authDomain: "kwitter-8b63e.firebaseapp.com",
  databaseURL: "https://kwitter-8b63e-default-rtdb.firebaseio.com",
  projectId: "kwitter-8b63e",
  storageBucket: "kwitter-8b63e.appspot.com",
  messagingSenderId: "126508700088",
  appId: "1:126508700088:web:ed4db7804485118afcbf4d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function getData() {
firebase.database().ref("/").on('value', function (snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function (childSnapshot) {
    childKey = childSnapshot.key;
    room_name = childKey;
    //Start code
    console.log("room name - " + room_name);
    row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
  });
});
}
getData();

function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location = "kwitter_room.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
  window.location = "kwitter_room.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}

function send(){
msg = document.getElementById("msg").value;
firebase.database().rel(room_name).push({
  name:user_name,
  message:msg,
  like:0
})
document.getElementById("msg").value = "";
}

firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});




