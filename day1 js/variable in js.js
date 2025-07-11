// 1. var 
// scope:Function-scoped
// Redeclaration: Allowed
// Reassignment: Allowed
function testVar() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable, redeclared
    console.log(x); // 20
  }
  console.log(x); // 20
}
// 2.let
// scope: Block-scoped
// Redeclaration: Not allowed in the same scope
// Reassignment: Allowed
function testLet() {
  let y = 10;
  if (true) {
    let y = 20; // Different variable, block-scoped
    console.log(y); // 20
  }
  console.log(y); // 10
}   
// 3.const
// scope: Block-scoped
// Redeclaration: Not allowed in the same scope
// Reassignment: Not allowed
function testConst() {
  const z = 10;
  if (true) {
    const z = 20; // Different variable, block-scoped
    console.log(z); // 20
  }
  console.log(z); // 10
}   



