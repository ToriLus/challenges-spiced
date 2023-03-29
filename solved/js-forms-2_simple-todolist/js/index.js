console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

//task 1:
// 1. Listen to the submit event
// Write an event listener for the form submit.
// Log the user data to the console (we will use the data later in this exercise).
// After submit, reset the form and focus the input field with the name headline.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let headline = document.getElementById("headline");
  let task = document.getElementById("task");

  // 2. Create list entries
  // Look at the index.html file: there already is an ul for our submitted todos. We only need to write a function which creates list items and appends them to this list.

  // Here are some hints to guide you:

  // The function needs one parameter (which will be the form data object).
  // The list item has
  // a headline containing the string from data.headline
  // a text element containing the string from data.task.
  // Make sure NOT to use innerHTML since it is a security risk when working with user inputs.
  // Don't forget to
  // append the headline and text element to the list item as well as the list item to the todoList
  // call the function when the submit event is fired and pass the data object as an argument.

  function addTask(parameter) {
    let createList = document.createElement("li");
    let createHeader = document.createElement("h2");
    let createText = document.createElement("p");

    console.log(createHeader, createText);

    createHeader.textContent = headline.value;
    createText.textContent = task.value;
    createList.append(createHeader);
    createList.append(createText);
    todoList.append(createList);

    headline.value = "";
    task.value = "";
    form.focus();
    //this is stuff from task 1 ^^
  }

  addTask(form);

  //win: i did not cry after all!!!!
});
