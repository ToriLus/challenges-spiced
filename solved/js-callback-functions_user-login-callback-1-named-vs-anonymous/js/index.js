console.clear();

/* PART 1 */
// Call handleUserLogin below!
function showWelcomeMessage() {
  console.log("You are now logged in");
}

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞#

  onSuccess();
}

handleUserLogin(showWelcomeMessage);

/* PART 2 */
handleUserLogin(() => {
  showWelcomeMessage();
});

/* PART 3 */
handleUserLogin(() => {
  console.log("You are now logged in 3");
});
