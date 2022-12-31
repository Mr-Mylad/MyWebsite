console.log('Welcome to the homepage!');

for (Item in document.getElementsByClassName('Me')) {
    document.getElementsByClassName('Me')[Item].onclick = ItIsMe
}

function ItIsMe() {
    Random = Math.round(Math.random(0, 1));
    if (Random == 0) {
        alert('Ouch! Don\'t poke me!');
    } else {
        alert('Hi! It\'s me!');
    }
}