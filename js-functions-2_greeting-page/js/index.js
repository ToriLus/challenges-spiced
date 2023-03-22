console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

let time = new Date().getHours();
let day = new Date().getDay();

function getGreeting() {
  // Code here
  if (time >= 6 && time <= 12) {
    return "Good Morning";
  }
  if (time >= 13 && time <= 18) {
    return "Good Afternoon";
  }
  if (time >= 19 && time <= 22) {
    return "Good Evening";
  }
  if (time >= 23 && time <= 5) {
    return "Good Night";
  }
}

function getDayColor() {
  // Code here
  if (day == 1) {
    return "darkgray";
  }
  if (day == 2 || day == 3 || day == 4 || day == 5) {
    return "lightblue";
  }
  if (day == 6 || day == 7) {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
