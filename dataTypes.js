// Javascript Datatypes
/*===================================================
      // There are tw type of datatypes in javascript
      1) Primitive     2) Non-primitive (Object types)
==================================================== */

/*==================================================
    Primitiv Data Tyes
==================================================*/
// 1) String 2) Number 3) Boolean 4) Undefined 5) null

/*==================================================
    Non-Primitiv Data Tyes
==================================================*/
// 1) Object 2) Array 3) Function


/*==================================================
    String Data Tyes
==================================================*/
let str1 = 'Hello, Bangladesh';
console.log(str1) // output: Hello, Bangladesh

let str2 = '5' + 2
console.log(str2) // output: 52

let str3 = "what's your name";
console.log(str3); // output: what's your name

let str4 = 'I live in"Bangladesh"';
console.log(str4); // output: I live in "Bangladesh"

let str5 = "'H2SO4' It is Acid";
console.log(str5); // output: 'H2SO4' It is Acid

/*
Best practices of string literal
*/
let str6 = `I love my country`; 
console.log(str6); 

let str7 = `${str6}. ${str4}`;
console.log(str7);

/*==================================================
    String Constructor
==================================================*/
//Number convert to string
 let str8 = String(12);
 console.log(str8); // output: 12. [But it is string]

 let str9 = String("This is") // But it is bad practices
 console.log(str9);