console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!

//making the function

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in as ${userRole}`);
}

//part one - calling the function
handleUserLogin(showWelcomeMessage);

//part two - anonymous function
handleUserLogin((userName, userRole) => {
  console.log(`Welcome ${userName}! You are logged in as ${userRole}`);
});
