/*
let x = ' x '
let o = ' o '
let blank = '   '
*/

// Change these values manually to place on grid
// each var is three chars long, so bookend x's and o's with a space

let space1 = ' x '
let space2 = ' o '
let space3 = '   '
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


console.log(grid);

