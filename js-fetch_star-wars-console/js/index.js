console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  let fetched = await fetch(url);
  let someData = await fetched.json();

  console.log(someData);
  //console logging some values
  console.log(someData.results);

  //r2d2 eye colour logging
  console.log(someData.results[2].eye_color);
}

fetchData();
