

let space1 = ' x '
let space2 = ' x '
let space3 = ' x '
let space4 = ' x '
let space5 = ' x '
let space6 = '   '
let space7 = ' o '
let space8 = '   '
let space9 = '   '


let grid =     `   
               |   |   
            ${space1}|${space2}|${space3}
               |   |   
            -----------
               |   |   
            ${space4}|${space5}|${space6}
               |   |   
            -----------
               |   |   
            ${space7}|${space8}|${space9}   
               |   |   `;

let theGrid = [['', '', ''],
               ['', '', ''],
               ['', '', '']];


theGrid[0][0] = space1;
theGrid[0][1] = space2;
theGrid[0][2] = space3;
theGrid[1][0] = space4;
theGrid[1][1] = space5;
theGrid[1][2] = space6;
theGrid[2][0] = space7;
theGrid[2][1] = space8;
theGrid[2][2] = space9;


console.log(grid);

// // This only checks the top row
// // could implement nested loops to check through
// // entire theGrid array for win conditions
// if (theGrid[0][0] === theGrid[0][1] && theGrid[0][0] === theGrid[0][2] && theGrid[0][0] !== ' ') {
//     console.log(`========= ${theGrid[0][0]}\'s win! =========`);
// }

// //TicTacToe win conditions
// // if [i][0], [i][1], [i][2] are same = win
// // if [0][i], [1][i], [2][i] are same = win
// // if [0][0], [1][1], [2][2] are same = win
// // if [0][2], [1][1], [2][0] are same = win

