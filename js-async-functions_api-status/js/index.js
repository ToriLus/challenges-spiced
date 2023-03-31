const icon = document.querySelector('[data-js="status-icon"]');
const button = document.querySelector('[data-js="status-button"]');

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

// Something needs to change here…
// ↙️

async function checkIfApiIsAvailable() {
  /**
   * Hint 1:
   * Use the `fetch()` function and pass the `apiStatusUrl` into it
   *
   * Hint 2:
   * The fetch function returns a promise which resolves to a Response
   * object once it is ready.
   *
   * Hint 3:
   * The Response object has a `ok` property which is true if the response
   * is okay and false if it is not.
   **/
  // --v-- write your code here --v--
  icon.innerText = "⏳";

  let response = await fetch(apiStatusUrl);

  // if (response.ok == true) {
  //   icon.innerText = "yes";
  // } else {
  //   icon.innerText = "no";
  // }
  if (response.ok == true) {
    function randomfucct() {}
  } else {
  }

  //this is literally the worst way this could be done, but my TRY statement does not work with anything that is NOT a function. So I am creating the function ONLY if the result.ok returns as TRUE. I tried passing response.ok into the TRY function but it would always return YES, even if the bool was false. If anyone Has any BETTER idea how to do it, please LET ME KNOW.
  try {
    randomfucct();
    icon.innerText = "✅";
    console.log(response.ok);
  } catch (error) {
    icon.innerText = "❌";
  }
  console.log(response);
  console.log(response.ok);
  // --^-- write your code here --^--
}

button.addEventListener("click", () => {
  checkIfApiIsAvailable();
});
