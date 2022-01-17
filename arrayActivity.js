// Activity 1:
console.log("========== ACTIVITY 1 ==========");
console.log("\n");
// Make a list of three elements
let favWebs = ['YouTube', 'Twitter', 'Spotify'];
// Print it
console.log(favWebs);
// Add two, remove one
favWebs.push('Instagram');
favWebs.push('Netflix');
favWebs.pop();
// Print it
console.log(favWebs);

// Activity 2:
console.log("\n");
console.log("========== ACTIVITY 2 ==========");
// .map(param => function(i))
console.log("========== .map() ==========");
// This creates a NEW array populated with the results of the function
// passed to map. In this case, we tell it to turn every element 'i'
// into uppercase.
const map1 = favWebs.map(i => i.toUpperCase());
console.log(map1);
console.log(favWebs);

// .shift()
console.log("\n");
console.log("========== .shift() ==========");
// This removes the first element of the array.
// NOTE: this is a mutable method! i.e. performing this
// will change the array from there onwards
let shift = favWebs.shift();
console.log(shift);
console.log(favWebs);

// .unshift(param)
console.log("\n");
console.log("========== .unshift() ==========");
// This adds the parameter to the front of the array.
// You can add multiple parameter if the are comma-separated.
let unshift = favWebs.unshift('YouTube');
console.log(unshift); //NOTE: this returns an integer of the length of the array
console.log(favWebs);

// .slice(startHere, upToHere)
console.log("\n");
console.log("========== .slice() ==========");
// This returns a COPY of the specified section of the array
// i.e. the original is unaffected
let slice = favWebs.slice(0, 2);
console.log(slice);
console.log(favWebs);

// .splice(startHere, upToHere)
console.log("\n");
console.log("========== .splice() ==========");
// This removes the specified elements from the array
let spliced = favWebs.splice(0, 2);
console.log(spliced);
console.log(favWebs);
// NOTE: the original array has been changed.