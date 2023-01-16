// HTML elements
const ResultDisplay = document.getElementById('Results');

// Inputs
const Inputs = document.getElementsByClassName('Inputs');
const UserInput = document.getElementById('UserInput');
const SendInput = document.getElementById('SendInput');

// Commands
const Commands = document.getElementsByClassName('Commands');
const CommandList = document.getElementById('Commands');
const SendCommand = document.getElementById('SendCommand');

function Start() {
    // 
}

// This function makes the items from the "Commands" class disappear and the items from "Inputs" class appear.
function InputMode() {
    for (Item in Inputs) {
        Inputs[Item].className = 'Inputs'
    }

    for (Item in Commands) {
        Commands[Item].className = 'Commands Invisible'
    }
}

// This function makes the items from the "Inputs" class disappear and the items from "Commands" class appear.
function CommandMode() {
    for (Item in Commands) {
        Commands[Item].className = 'Commands'
    }
    for (Item in Inputs) {
        Inputs[Item].className = 'Inputs Invisible'
    }
}