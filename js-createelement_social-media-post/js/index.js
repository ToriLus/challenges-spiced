console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// const post = document.createElement("article");

// const paragraph = document.createElement("p");

// paragraph.classList.add("post__content");

// paragraph.textContent = "lorem  ipsum something something";

// post.append(paragraph);

// console.log(post);

// const button = document.createElement('button');

// button.setAttribute('type', 'button');

// button.innerText = 'click me';

// //append it to the body

// document.body.append(post);

let newElement = document.createElement("article");
newElement.innerHTML = `
<article class="post">
  <p class="post__content">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <footer class="post__footer">
    <span class="post__username">@username</span>
    <button type="button" class="post__button" data-js="like-button">
      ♥ Like
    </button>
    </footer>`;

document.body.append(newElement);

button.addEventListener("click", handleLikeButtonClick);
