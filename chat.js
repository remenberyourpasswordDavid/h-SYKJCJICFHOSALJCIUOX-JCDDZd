// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
https://project-100-c4c72-default-rtdb.firebaseio.com/

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
     
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
     
}



