console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  console.log("it works!");
  let newToast = document.createElement("li");
  toastContainer.append(newToast);
  newToast.innerHTML = `
    <li class="toast-container__message">This is a toast message</li>
  `;

  console.log(newToast);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  console.log("i hope it works");
  toastContainer.innerHTML = "";
});
