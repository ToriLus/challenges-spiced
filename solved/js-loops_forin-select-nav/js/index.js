console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

for (let options in languages) {
  let languageValue = document.createElement("option");
  languageValue.value = `${languages[options]}`;
  languageValue.innerText = `${languages[options]}`;

  select.append(languageValue);
}

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

for (let item in nav) {
  let newElement = document.createElement("li");
  let newLink = document.createElement("a");
  newLink.setAttribute("href", nav[item].href);
  newLink.setAttribute("text", nav[item].text);
  newLink.innerText = nav[item].text;

  console.log(newElement, newLink);
  newElement.append(newLink);
  navElement.append(newElement);
}

//looks ugly but works I guess? hehe!

// --^-- write/change code here --^--
