let headerOne = document.getElementById("headerStyling");

headerOne.style.color = "red";
headerOne.style.backgroundColor ="lightgray";

let p = document.createElement('p');
p.innerHTML = 'Josephine';

document.getElementById('headerStyling').appendChild(p);