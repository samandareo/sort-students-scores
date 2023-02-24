/**
 * This script help to sorting data that students' scores
 **/

// This values are obtained from HTML
var distinction = document.getElementById('distinction');
var merit = document.getElementById('merit');
var pass = document.getElementById('pass');
var fail = document.getElementById('fail');

// This array for saving names of students. In fact , students are separated into groups by their score
var D = [];
var M = [];
var P = [];
var F = [];

function getValue(){
// Get values
let getCount = prompt("Enter amount of students");
for(let i = 0; i<getCount; i++){
    let getName = prompt("Enter student name");
    let getScore = prompt(`Enter ${getName}'s score`);

    switch (getScore) {
        case "D":
            D.push(getName);
            break;
        case "M":
            M.push(getName);
            break;
        case "P":
            P.push(getName);
            break;
        case "F":
            F.push(getName);
            break;
        default:
            console.log("It is wrong mark")
            break;
    }
}
}


function declareData(a){
    a();
    
    let strDistinction = D.join(", ");
    let strMerit = M.join(", ");
    let strPass = P.join(", ");
    let strFail = F.join(", ");

    if(strDistinction === ""){
        distinction.innerText = "None";
    }else{
        distinction.innerText = strDistinction;
    }
    if(strMerit === ""){
        merit.innerText = "None";
    }else{
        merit.innerText = strMerit;
    }
    if(strPass === ""){
        pass.innerText = "None";
    }else{
        pass.innerText = strPass;
    }
    if(strFail === ""){
        fail.innerText = "None";
    }else{
        fail.innerText = strFail;
    }
    
}

declareData(getValue);