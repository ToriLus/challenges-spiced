console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}, you are now logged in as ${userRole}`);
}

function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

//part three
handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");

//part four
handleUserLogin(showWelcomeMessage, showErrorMessage, "JohnDoe");
