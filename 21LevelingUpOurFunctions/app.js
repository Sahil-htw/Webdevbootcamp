
//Function Scoping


// let totalEggs = 0;
// function collectEggs(){
//     let totalEggs = 6;
//     console.log(totalEggs);
// }
// collectEggs();
// console.log(totalEggs);



//Block Scoping


// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch();

// let radius = 8;
// if (radius > 0){
//     const PI = 3.14159;
//     let msg = 'HIIII!';
//     console.log(msg);
// }

// console.log(radius);
// console.log(PI);


//Lexical Scoping

// function bankRobbery(){
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther'];
//     function cryForHelp(){
//         for (let hero of heroes){
//             console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
//         }
//     }
//     cryForHelp();
// }

//Function Expressions