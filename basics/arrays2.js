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

const games = [
   {title: 'The Last of Us', rating: 10 },
   {title: 'Fallout 4', rating: 9.5 },
   {title: 'Legos', rating: 6 },
   {title: "No Man's Sky", rating: 9.5 },
   {title: 'Destiny 2', rating: 9 },
   {title: 'Sonic', rating: 3 }
];

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

//!   FILTER

// const shortSearch = videos.filter(function(video){
//    return video.length < 10;
// })
// console.log(shortSearch);

// const highRating = games.filter(function(game){
//    return game.rating > 9
// })
// console.log(highRating);

//!   SOME AND EVERY (returns true or false)
// const checkRating = games.every(function(game){
//    return game.rating > 8;
// })
// console.log(checkRating);

// const someRating = games.some(function(game){
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
