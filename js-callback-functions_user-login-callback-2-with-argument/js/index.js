console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

//Part one//

function showWelcomeMessage(userName) {
  console.log("Welcome " + userName + "! You are now logged in!");
}

handleUserLogin(showWelcomeMessage);

//part two//

handleUserLogin((userName) => {
  console.log("Welcome " + userName + "! You are now logged in!");
});
