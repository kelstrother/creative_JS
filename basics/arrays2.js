// let bank = 250;
// let newBank = bank;
// newBank = 500;

// console.log(bank, newBank)


// //! OBJECTS AND ARRAYS REFFERENCE TYPES

// const names = ["Kel", "Rachel", "Joe", "Jorge"]

// const newNames = names
// //!   THE ORIGINAL ARRAY WILL BE EFFECTED EVEN WHEN YOU CREATE A NEW ARRAY
// newNames.push("Jess");
// console.log(newNames)
// console.log(names)


const videos = [
   'Terminator', 
   'Tommy Boy', 
   "Dumb and Dumber", 
   'Remember the Titans',
   "html tutorial",
   "css",
   "ui/ux"
];

// const games = [
//    {title: 'The Last of Us', rating: 10 },
//    {title: 'Fallout 4', rating: 9.5 },
//    {title: 'Legos', rating: 6 },
//    {title: "No Man's Sky", rating: 9.5 },
//    {title: 'Destiny 2', rating: 9 },
//    {title: 'Sonic', rating: 3 }
// ];

//& ARRAY METHODS

//! FOR EACH
// videos.forEach(function(){
//    console.log("run");
//    console.log(videos);
// })

//!   MAP

// const newVideos = videos.map(function(video){
//    return video.toUpperCase;
// })
// console.log(newVideos);

// ! MAP /// W ARROW FUNCTION

// const newVideos = videos.map((video) => {
//    return video.toUpperCase()
// })
// console.log(newVideos);

// const newVideos = videos.map(function(video){
//    if(video.length < 10){
//       return video
//    } else {
//       return "Title is too long";
//    }
// })
// console.log(newVideos);

//?   TERNARY OPERATOR VERSION

// const newVideos = videos.map(function (video) {
//   return video.length < 7 ? video : 'Title too long'
// });

// console.log(newVideos);

//! FIND returns the first item that includes the input

// const searchTutorial = videos.find(function(video){
//    return video.includes('r')
// })

// console.log(searchTutorial);

//!   FIND W ARROW FUNCTION

// const shortTitle = videos.find((video) => {
//    return video.length < 4;
// })
// console.log(shortTitle);

//!   FILTER

// const shortSearch = videos.filter(function(video){
//    return video.length < 10;
// })

// const shortSearch = videos.filter((video) => {
//    return video.length < 10;
// })

// console.log(shortSearch);

// const highRating = games.filter(function(game){
//    return game.rating > 9
// })

// const highRating = games.filter((game) => {
//    return game.rating < 9;
// })

// console.log(highRating);

//!   SOME AND EVERY (returns true or false)
// const checkRating = games.every(function(game){
//    return game.rating > 8;
// })

// const checkRating = games.every((game) => {
//    return game.rating > 8;
// })

// console.log(checkRating);

// const someRating = games.some(function(game){
//    return game.rating > 8;
// })

// const someRating = games.some((game) => {
//    return game.rating > 8;
// })

// console.log(someRating);

//! ARROW FUNCTIONS (created to make callback functions easier to write)

//* NON ARROW FUNCTION

// const newVideos = videos.map(function (video) {
//   return video.length < 7 ? video : 'Title too long'
// });
// console.log(newVideos);

// * ARROW FUNCTION
// const arrowVideos = videos.map((video) => {
//    return video.toUpperCase();
// })
// console.log(arrowVideos);

//*   ARROW FUNCTION WITH MULTIPLE RETURNS
// const arrowVideos = videos.map((video) => {
//    const longVideo = video.toUpperCase();
//    if(video.length > 7) {
//       return video.toUpperCase();
//    } else {
//       return video;
//    }
// })
// console.log(arrowVideos);

// * ARROW FUNCTION (1 line function and return)
// const arrowVideos = videos.map(video => video.toUpperCase())
// console.log(arrowVideos);

// * ARROW FUNCTION W/ TERNARY SYNTAX
// const arrowVideos = videos.map((video) => {
//    return video.length < 7 ? video : 'Too Long'
// })
// console.log(arrowVideos);

//! SORT (array method)

// const items = ['Banana', 'Orange', 'Apple', 'Mango'];
// const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

// items.sort()      //!   SORT() SORTS STRINGS IN ALPHABETICAL ORDER
// console.log(items);


// ratings.sort()    //! SORT() DOES NOT WORK SO WELL WITH NUMBERS
// console.log(ratings);

//* COMPARE FUNCTION SUBTRACTS A FROM B AND SORTS THE NUMBERS
//* - if the return is negative, a is placed before b.
//* - if the return is positive, b is placed before a.
//* - if the arguments are equal, nothing changes.
// ratings.sort((a,b) => {    
//    return a - b;
// })
// console.log(ratings);

// const games = [
//   { title: "The Last of Us", rating: 10 },
//   { title: "Fallout 4", rating: 9.5 },
//   { title: "Legos", rating: 6 },
//   { title: "No Man's Sky", rating: 9.5 },
//   { title: "Destiny 2", rating: 9 },
//   { title: "Sonic", rating: 3 },
// ];

//* SORT THE ARRAY OF GAMES BY ASCENDING RATING

// games.sort((a, b) => {
//    return a.rating - b.rating;
// });
// console.log(games);


//*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!\\\\\\\\\\\\\\\\ CREATING COPIES OF ARRAYS   ////////////////////////////
//*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//? USING THE SPREAD OPERATOR TO CREATE COPIES SO NOT TO MODIFY ORIGINAL

// const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

// const descRating = [...ratings]

// const ascRating = [...ratings]


// // descRating.sort((a,b) => b - a);       //^ very short way to write it

// descRating.sort((a,b) => {             //& standard arrow function
//   return b - a;
// });

// ascRating.sort((a,b) => a - b);     //^ very short way to write it

// // ascRating.sort((a,b) => {        //& standard arrow function
// //    return a - b;
// // })

// console.log("original ratings", ratings);
// console.log("descending ratings", descRating);
// console.log("ascending ratings", ascRating);