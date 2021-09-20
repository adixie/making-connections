document.getElementById('profileName').innerText = "Jane Doe";

function changeName() {
    document.getElementById('profileName').innerText = "Sarah Smith";
}

var connectionrequests = 2;
var number2 = document.querySelector('.number2');

number2.innerText = connectionrequests;

function removeTodd() {
    document.getElementById("todd").remove();
    connectionrequests --;
    number2.innerText = connectionrequests;
}

function removePhil() {
    document.getElementById("phil").remove();
    connectionrequests --;
    number2.innerText = connectionrequests;
}

var yourconnections = 418;
var number418 = document.getElementById('number418');

number418.innerText = yourconnections;

function increaseConnections(){
    yourconnections ++;
    number418.innerText = yourconnections;
}