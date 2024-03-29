console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  // --v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    let star = document.createElement("img");
    if (i <= filledStars) {
      star.src = "assets/star-filled.svg";
    } else {
      star.src = "assets/star-empty.svg";
    }
    star.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(star);
  }
}
//   for (let i = 1; i <= 5; i++) {
//     const newStar = document.createElement("img");
//     if (i <= filledStars) {
//       newStar.src = "assets/star-filled.svg";
//     } else {
//       newStar.src = "assets/star-empty.svg";
//     }
//     newStar.addEventListener("click", ()=>{
//       renderStars(i)
//     })
//     starContainer.appendChild(newStar);
//   }
// }

renderStars();
