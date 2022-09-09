TASK-1
// TASK-2
var Age;
alert("Welcome to the website :)");
Age = Number(prompt("Please enter your age"));
function userAge() 
{
    if (Age < 18) return alert("Person under 18 years old can't enter to the site");
}
userAge();

// TASK-3

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


//  TASK-4

 function Groups() 
{

   var value = document.getElementById("Input")
    if (value.length == 4 || value.length == 5) {
        if (value.includes("1", 1)) {
            body.style.backgroundColor = "yellow"
        }
        else if (value.includes("2", 1)) {
            body.style.backgroundColor = "red"
        }
        else if (value.includes("3", 1)) {
            body.style.backgroundColor = "black"
        }
    } 
}