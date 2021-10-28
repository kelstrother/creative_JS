//^\\\\\\\\    LOOPS    \\\\\\\\\\\\

// for (let i = 0; i < 100; i++) {
//    //run some code if the above statement is true 
//    if(i === 40) {
//       console.log(`yea... you mother fucka`)
//       break;
//    }
//    console.log(i)
// };

//^ LOOP THROUGH THE ARRAY OF BANDS

// const bands = [
//    "Coheed and Cabria", 
//    "RX Bandits", 
//    "Umphrey's Mcgee",
//    "John Mayer Trio"
// ];

// for (let i = 0; i < bands.length; i++) {
//    console.log(bands[i])
// }

//^ NEWER AND MORE SIMPLE WAY OF LOOPING THROUGH ARRAYS

// const bands = [
//    "Coheed and Cabria", 
//    "RX Bandits", 
//    "Umphrey's Mcgee",
//    "John Mayer Trio"
// ];

// for (let name of bands){
//    console.log(name)
// }

// ^\\\\\ FOR EACH LOOP (ONLY APPLICABLE TO ARRAYS) \\\\\\

// const bands = [
//   "Coheed and Cabria",
//   "RX Bandits",
//   "Umphrey's Mcgee",
//   "John Mayer Trio",
// ];

// bands.forEach(function(band, index){
//    console.log(band, index)
// })

//^\\\\\\\\\\\\   LOOPING THROUGH AN OBJECT    \\\\\\\\\\\\\\\\\\\\\

// const user = {   //! AN OBJECT IS MADE UP OF "KEY (property) VALUE" PAIRS
//    name: 'Leopold',
//    age: 38,
//    subscribers: 100000,
//    networth: 250000000
// }

// for (let x in user) {
//    console.log(user[x])
// }

//^ WHILE & DO WHILE LOOPS
// let i = 20

// while(i < 30){
//    console.log(i);
//    i++;
// }

// let i = 0;

// do {
//    console.log(i)
//    i++;
// }

// while (i < 10);

//?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//^\\\\\\\\\\\\\\\\\\\\\\\ LITTLE GUESSING GAME \\\\\\\\\\\\\\\\\\\\\\
//^\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function guessGame() {
//   let randomNum = Math.floor(Math.random() * 11); //^GENERATE A RANDOM NUMBER 

//   let guess; //^ GIVE THE USER THE ABILITY TO GUESS THE NUMBER

//   do {
//     guess = prompt(`Guess a number between 1 & 10`);
//     console.log(guess, randomNum);
//     if (randomNum > guess) {//^ IF THEY GUESS WRONG, GIVE THEM A HINT
//       
//       console.log(`Your guess is a little low...`);
//     } else if (randomNum < guess) {
//       console.log(`Your guess is a wee bit high...`);
//     }
//   } while (guess != randomNum); //^ IF THEY WIN, CONGRATULATE THEM
//   console.log(`DING DING DING! WE GOT A WINNER!`);
// }

// guessGame();



