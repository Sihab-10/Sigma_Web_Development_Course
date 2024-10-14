// console.log("Hello I am conditional tutorial")

let age = 19;
// let grace = 2;
// Arithmatic Operator
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

//* Assignment Operator

/*
*    =     x=y
*    +=    x=x+y
*    -=    x=x-y
*    *=    x=x*y
*    /=    x=x/y
*    %=    x=x%y
*    **    x=x**y
*/ 


//* Comparison Operator
/*
*   ==      equal to
*   !=      not equal
*   ===     equal value and type
*   !==     not equal value and type
*   >       greater than
*   <       less than
*   >=      greater than or equal to 
*   <=      less than or equal to 
*   ?       ternary operator

*/ 

//* logical operator
/*
*     &&      logical and
*     ||      logical or
*     !       logical not
*/ 

/*
  I am a 
  multiline 
  comment
*/ 

//* if - else statement


if(age!=18){
  console.log("You can drive")
}
else{
  console.log("You cannot")
}

//* if-elseif statement

let age2 = 25;
if(age2==0){
  console.log("Are you kidding")
}
else if(age2>0  && age2 < 15){
  console.log("but you are a kid")
}
else if(age2>18){
  console.log("You are an adult")
}
else{
  console.log("Invalid Age")
}

// ternary operator ?

let num1 = 6;
let num2 = 8;
let num3 = num1>num2 ? (num1-num2):(num2-num1)
console.log(num3)

/*
meaning of this code is
let num1 = 6;
let num2 = 8;
if(num1>num2){
  let num3 = num1 - num2;
}
else{
  let num3 = num2 - num1;
}


*/ 