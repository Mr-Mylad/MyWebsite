// HTML elements
const Body = document.getElementsByTagName('body')[0];
const ChatList = document.getElementById('ChatList');
const ColorModeButton = document.getElementById('ColorModeButton');

// Typed inputs
const InputItems = document.getElementsByClassName('Inputs');
const UserInput = document.getElementById('UserInput');
const SendInput = document.getElementById('SendInput');

// Multiple choice inputs
const OptionItems = document.getElementsByClassName('Options');
const OptionList = document.getElementById('UserOptions');
const SendOptions = document.getElementById('SendOption');

// Other variables
var Name = '';
var Inventory = [];
var Talking = false;

/*
All inventory items with their id.
id. item
--------------------------------
1   Rad suit
*/

// Onclicks and stuff
// Typed
SendInput.onclick = Chat;
UserInput.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        Chat();
    }
});

// Options
SendOptions.onclick = Chat;

// Prompts the user to give his/her name
MakeReply('?', 'Hey you, what are you doing out here? What\'s your name?', 0);

// Sets a variable called starting to 0 which is used to know which phase the player is in (Starting, tutorial, tutorial over)
var Starting = 0;
Chat()

async function Chat() {
    // This is the code that runs when your save is empty
    if (Starting == 0) {
        MakeReply('Game', 'Enter your name.', 1);
        UserInput.placeholder = 'Enter your name.';
        InputMode('What is your name?', '');
        Starting = 1;
    } else if (Starting == 1) {
        Name = UserInput.value;
        MakeReply(Name, `My name is ${Name}.`, 0);
        UserInput.placeholder = 'Say nothing please.';
        Starting = 2;
        Chat()
    } else if (Starting == 2) {
        Talking = true;
        MakeReply('Tyler', `Hey ${Name}, I\'m Tyler, nice to meet you.`, 0);
        await new Promise(r => setTimeout(r, 3000));
        MakeReply('Tyler', 'What are you doing out here? Don\'t you know there was a nuclear explosion yesterday? You don\'t even have a rad suit. You\'ll die from the radiation.', 0);
        await new Promise(r => setTimeout(r, 4000));
        MakeReply('Tyler', 'Here, I have a spare suit in my bag. Take it.', 0);
        MakeReply('Inventory', 'Recieved a radsuit', 1);
        UserInput.value = ''
        await new Promise(r => setTimeout(r, 5000));
        MakeReply('Tyler', 'I was going to my house. Care to join?', 0);
        Inventory.push(1);
        Talking = false;
        OptionMode([['Sure, why not?', 0], ['No thanks, I\'m good. (Skip tutorial)', 1]])
        Starting = 'TutorialCheck';
    } else if (Starting == 'TutorialCheck') {
        if (OptionList.value == 0) {
            MakeReply(`${Name}`, 'Sure, why not?', 0);
            Starting = 'Tutorial';
        } else {
            MakeReply(`${Name}`, 'No thanks, I\m good.', 0);
            Starting = 'Started';
        }
    }
    else {
        // This is the main chat function that runs if your save is not empty
        const WhatToSay = UserInput.value;
        InputMode('Say something.', '')
        MakeReply(Name, WhatToSay, 0);
    }
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
        Id += 1;

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

function OptionMode(OptionsGiven) {
    // Hides the items from the "Inputs" class
    for (Item in InputItems) {
        InputItems[Item].className = 'Inputs Invisible'
    }
    // Shows the items from the "Options" class
    for (Item in OptionItems) {
        OptionItems[Item].className = 'Options'
    }
    
    while (OptionList.lastElementChild) {
        OptionList.removeChild(OptionList.lastElementChild);
    }
    
    for (Option in OptionsGiven) {
        let OptionNode = document.createElement('option');
        OptionNode.innerHTML = OptionsGiven[Option][0];
        OptionNode.value = OptionsGiven[Option][1];
        OptionList.appendChild(OptionNode);
    }
    UserInput.value = '';
}

function InputMode(Placeholder = '', Value = '') {
    // Hides the items from the "Options" class
    for (Item in OptionItems) {
        OptionItems[Item].className = 'Options Invisible';
    }
    // Shows the items from the "Options" class
    for (Item in InputItems) {
        InputItems[Item].className = 'Inputs'
    }

    while (OptionList.lastElementChild) {
        OptionList.removeChild(OptionList.lastElementChild);
    }
    UserInput.placeholder = Placeholder;
    UserInput.value = Value;
}

function NoInputMode() {
    // Hides everything
    for (Item in OptionItems) {
        OptionItems[Item].className = 'Options Invisible';
    }
    for (Item in InputItems) {
        InputItems[Item].className = 'Inputs Invisible';
    }
}


function Forever() {
    if (Talking) {
        NoInputMode();
    }
    scrollTo(UserInput.getBoundingClientRect().x, UserInput.getBoundingClientRect().y);
}
setInterval(Forever, 0);