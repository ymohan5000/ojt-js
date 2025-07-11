// const student={
//     name:"mohan yadav",
//     age:18,
//     course:"btech",

// }
// console.log(student);
// console.log(student.name);

// const student={
//     name:"mohan",
//     user:function(){
//         console.log("hellow my name is mohan yadav");
//     }
// }
// console.log(student.name);
// student.user();

// const student={
//     name:"yadav",
//     user:{
//         city:"napal",
//         area:1212,
//     }
// }
// console.log(student.user.city);

// array of objects
// const student=[

//     {
//         name:"ram",
//         class:12

//     },
//     {
//         schoo:"smss",
//         collage:121,
//     }
// ];
// console.log(student[1].schoo)

const student = {
  name: "Sita",
  grade: 10
};

// Add
student.age = 16;

// Update
student.grade = 11;

// Delete
delete student.name;

console.log(student); // { grade: 11, age: 16 }
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
// Output: [["name", "Mohan"], ["age", 21], ["country", "Nepal"]]
