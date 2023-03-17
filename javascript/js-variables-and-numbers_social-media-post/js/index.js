console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const postTitle = "my Title Post";
const postText = "Text of my Post";
let numberOfLikes = 1;
const userWhoCreatedThePost = "Not-me";
const isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log(postTitle, postText);
console.log("number of likes: ", numberOfLikes);
console.log("by: ", userWhoCreatedThePost);
console.log("Reported: ", isReported);
console.log("number of likes: ", numberOfLikes + 1);

// --^-- write your code here --^--
