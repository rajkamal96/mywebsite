 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAd4nS7Z5kNr4LT5dkHQluDvtMn48i3Fus",
    authDomain: "portfolio-cb37f.firebaseapp.com",
    databaseURL: "https://portfolio-cb37f.firebaseio.com",
    projectId: "portfolio-cb37f",
    storageBucket: "portfolio-cb37f.appspot.com",
    messagingSenderId: "872018994951",
    appId: "1:872018994951:web:63ddc905dc7df4d23047a2",
    measurementId: "G-VYSH0CG4S7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


//message collection
var messagesRef = firebase.database().ref('messages');


//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    //save message
    saveMessage(name,email,message);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //hide alert after 3 secs
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save mesasge to firebase
function saveMessage(name,email,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}