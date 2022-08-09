const firebaseConfig = {
    apiKey: "AIzaSyCnpJTEk0eW6wT9Mrs7EfQzKUYl3-vrD3Y",
    authDomain: "prueba-de-tditter.firebaseapp.com",
    databaseURL: "https://prueba-de-tditter-default-rtdb.firebaseio.com",
    projectId: "prueba-de-tditter",
    storageBucket: "prueba-de-tditter.appspot.com",
    messagingSenderId: "255250060734",
    appId: "1:255250060734:web:a7902a694107b081c2d5ef"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }