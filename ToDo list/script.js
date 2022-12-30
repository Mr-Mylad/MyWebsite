const UserInput = document.getElementById('UserInput');
const EnterButton = document.getElementById('Enter');
const Done = document.getElementById('Done');
const List = document.getElementById('List');
var ThingsToDo = [];
EnterButton.onclick = Add;
Done.onclick = Remove;

UserInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        Add();
    }
});

function Refresh() {
    var child = List.lastElementChild; 
    while (child) {
        List.removeChild(child);
        child = List.lastElementChild;
    }
    UserInput.value = '';
    ThingsToDo = [];
}

setInterval(function() {
    if (ThingsToDo.length >= 25) {
        for (Item in document.getElementsByClassName('UpDown')) {
            document.getElementsByClassName('UpDown')[Item].className = 'Visible';
        }
    } else {
        for (Item in document.getElementsByClassName('Visible')) {
            document.getElementsByClassName('Visible')[Item].className = 'UpDown';
        }
    }
}, 0)

function Add() {
    const ThingToDo = UserInput.value;
    if (ThingToDo.replace(/\s/g, '') != '') {
        let ToDo = document.createElement('p');
        ToDo.innerHTML = (ThingsToDo.length + 1) + ' : ' + ThingToDo;
        ToDo.id = ThingsToDo.length + 1;
        ToDo.className = 'ToDoObject';
        ThingsToDo.push(ThingToDo);
        List.appendChild(ToDo);
        UserInput.value = '';
    } else {
        alert('Your thing to do can\'t be nothing!');
    }
}
function Remove() {
    var WhatIsDone = prompt('What to-do have you done? (Enter the number)');
    if (parseInt(WhatIsDone) <= ThingsToDo.length && parseInt(WhatIsDone)) {
        var WhatToRemove = document.getElementById(WhatIsDone);
        List.removeChild(WhatToRemove);
        if (ThingsToDo.length > 1) {
            ThingsToDo.splice((parseInt(WhatIsDone) - 1), 1);
        } else {
            ThingsToDo[0] = 'Hey! I\'m done with my to-do list! Celebrations!';
        }
        Load('System');
    } else {
        alert('The to-do object id that you have given is not in the list');
    }
}

function Load(UserOrSystem) {
    if (UserOrSystem == 'User') {
        let child = List.lastElementChild; 
        while (child) {
            List.removeChild(child);
            child = List.lastElementChild;
        }
        ThingsToDo = [];
        const SaveCode = prompt('What is your save?');
        const Save = SaveCode.split('|');
        for(i in Save) {
            let ToDo = document.createElement('p');
            ToDo.innerHTML = (ThingsToDo.length + 1) + ' : ' + Save[i];
            ThingsToDo.push(Save[i]);
            List.appendChild(ToDo);
        }
    } else if (UserOrSystem == 'System') {
        let child = List.lastElementChild; 
        while (child) {
            List.removeChild(child);
            child = List.lastElementChild;
        }
        const SaveCode = ThingsToDo.join('|');
        const Save = SaveCode.split('|');
        ThingsToDo = [];
        for(i in Save) {
            let ToDo = document.createElement('p');
            ToDo.innerHTML = (ThingsToDo.length + 1) + ' : ' + Save[i];
            ToDo.id = ThingsToDo.length + 1;
            ToDo.className = 'ToDoObject';
            ThingsToDo.push(Save[i]);
            List.appendChild(ToDo);
        }
    }
}
function Save() {
    prompt('Your to-do list code is', ThingsToDo.join('|'))
}