var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fuji2.jpg') {
      myImage.setAttribute ('src','images/fuji.jpg');
    } else {
      myImage.setAttribute ('src','images/fuji2.jpg');
      myImage.setAttribute ("height","200px");
      myImage.setAttribute ("width","140px");
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my Japan trip throwback, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my Japan trip throwback, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

