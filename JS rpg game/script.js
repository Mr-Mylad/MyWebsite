// HTML elements
const Body = document.getElementsByTagName('body')[0];
const ChatList = document.getElementById('ChatList');
const ColorModeButton = document.getElementById('ColorModeButton');

// Typed inputs
const InputItems = document.getElementsByClassName('Inputs');
const UserInput = document.getElementById('UserInput');
const SendButton = document.getElementById('SendInput');

const OptionItems = document.getElementsByClassName('Options');

// Other variables
var Name = '';
var Inventory = [];

/*
All inventory items with their id.
id. item
--------------------------------
1   Rad suit
*/

// Onclicks and stuff
SendButton.onclick = Chat;
UserInput.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        Chat();
    }
});

// Prompts the user to give his/her name
MakeReply('?', 'Hey you, what are you doing out here? What\'s your name?', 0);
var Starting = 0;
Chat()

function Chat() {
    // This is the code that runs when your save is empty
    if (Starting == 0) {
        MakeReply('Game', 'Enter your name.', 1);
        UserInput.placeholder = 'Enter your name.'
        Starting = 1;
    } else if (Starting == 1) {
        Name = UserInput.value;
        MakeReply(Name, `My name is ${Name}`, 0);
        UserInput.placeholder = 'Say something.';
        Starting = 2;
        Chat()
    } else if (Starting == 2) {
        MakeReply('Tyler', `Hey ${Name}, I\'m Tyler, nice to meet you.`, 0);
        MakeReply('Tyler', 'What are you doing out here? Don\'t you know there was a nuclear explosion? You don\'t even have a rad suit. You\'ll die from the fallout.', 0);
        MakeReply('Tyler', 'Here, I have a spare suit in my bag. Take it.', 0);
        MakeReply('Tyler', 'I was going to my house. Care to join?')
        MakeReply('Inventory', 'Recieved a radsuit', 1);
        Inventory.push(1);
        Starting = 'Tutorial';
    } else if (Starting == 'Tutorial') {
        //
    } else {
        // This is the main chat function that runs if your save is not empty
        const WhatToSay = UserInput.value;
        MakeReply(Name, WhatToSay, 0);
    }
    UserInput.value = '';
}

var Id = 0

// Makes a reply
function MakeReply(Name, Message, Type) {
    // Creates the element to store the message
    const Reply = document.createElement('p');

    // Checks if the type of the reply is a normal text response
    if (Type == 0) {
        // Sets the name and message
        Reply.innerHTML = `${Name}: ${Message}`;

        // Sets the class name
        Reply.className = 'Responses';

        // Sets the id so it is easy to remove the reply
        Reply.id = Id;

    // Checks if the response type is a system response
    } else if (Type == 1) {
        // Sets the name and message
        Reply.innerHTML = `${Name}: ${Message}`;

        // Sets the class name
        Reply.className = 'SystemResponse'

        // Sets the id to Sys as everytime a new message is created, the last system message will be deleted
        Reply.id = 'Sys';
    }

    // Deletes the last system message after checking to see if it exists
    if (document.getElementById('Sys') != null) {
        ChatList.removeChild(document.getElementById('Sys'));
    }

    // Adds the element to the website for the user to see.
    ChatList.appendChild(Reply);
}

// This function removes a response with the id
function RemoveReply(idToRemove) {
    RemovingNode = document.getElementById(idToRemove);
    ChatList.removeChild(RemovingNode);
}

// This changes the color mode
var CurrentColor = 'White';
function ColorMode() {
    // Checks if the color is white
    if (CurrentColor == 'White') {
        // If it is white, then change the Body id to "Black" for the css to handle it
        Body.id = 'Black';

        // Changes the variable so it can be switched to light mode seemlessly
        CurrentColor = 'Black';

        // Changes the button text so the user can know which mode they are on
        ColorModeButton.innerHTML = 'Light mode';

        // Checks if the color is black
    } else if (CurrentColor == 'Black') {
        // If it is black, then change the Body id to "White" for the css to handle it
        Body.id = 'White';

        // Changes the variable so it can be switched to light mode seemlessly
        CurrentColor = 'White';

        // Changes the button text so the user can know which mode they are on
        ColorModeButton.innerHTML = 'Dark mode'
    }
}
ColorMode()

function OptionMode() {
    // Hides the items from the "Inputs" class
    for (Item in InputItems) {
        InputItems[Item].style.display = 'none';
        console.log(InputItems[Item])
    }
    // Shows the items from the "Options" class
    for (Item in OptionItems) {
        OptionItems[Item].style.display = 'block';
        console.log(InputItems[Item])
    }
}

function InputMode() {
    // Hides the items from the "Options" class
    for (Item in OptionItems) {
        OptionItems[Item].style.display = 'none';
        console.log(InputItems[Item])
    }
    // Shows the items from the "Options" class
    for (Item in InputItems) {
        InputItems[Item].style.display = 'block';
        console.log(InputItems[Item])
    }
}

const test = document.createElement('button');
test.innerHTML = 'option'
test.onclick = function() {
    OptionMode()
}
const test2 = document.createElement('button')
test2.innerHTML = 'input'
test2.onclick = function() {
    InputMode()
}

Body.appendChild(test)
Body.appendChild(test2)