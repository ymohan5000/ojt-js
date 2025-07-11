// loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// This loop will print numbers from 0 to 4
// The loop variable 'i' is declared with 'let', so it is block-scoped  
// and can be used within the loop block only

// If you try to access 'i' outside the loop, it will result in a ReferenceError



// Example of a while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}   
// This while loop will also print numbers from 0 to 4
// The loop variable 'j' is declared with 'let', so it is block-scoped
// and can be used within the loop block only









// Example of a do-while loop
let k = 1;
do {
    console.log(k);
    k++;
} while (k < 5);
// This do-while loop will also print numbers from 1 to 4
// The loop variable 'k' is declared with 'let', so it is block-scoped
// and can be used within the loop block only   
