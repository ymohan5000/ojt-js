// let promise = new Promise(function(resolve, reject) {
//   // do something...
//   if (/* success */) {
//     resolve("Success!");
//   } else {
//     reject("Error occurred!");
//   }
// });
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data loaded!");
  } else {
    reject("Failed to load data.");
  }
});

promise
  .then(response => {
    console.log("Success:", response);
  })
  .catch(error => {
    console.log("Error:", error);
  });
