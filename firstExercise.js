// STEP1.   Make sure to create a repo called "My Javascript Journey" and link this folder with that repository. 
//          You should not have any issues, if you are having issues, go back to the git note or ask your friend 
//          before asking your lecturer for help.(You cannot forget git commands)
// STEP2.   Every push to github must be to a branch and a pull request has to be made to merge the branch with main. 
//          Any pushes to main will result in you having to restart from the beginning(from creating a repo). 
// STEP3.   Follow the order : 1 create repo, 2 run all commands necessary to link these to folders, 
//          3 create and work on branch, 4 push branch and use a pull request to merge. 5 PULL YOUR CODE TO LOCAL REPO BEFORE CREATING ANOTHER BRANCH
// STEP4.   You must link this javascript file to an index.html page, taking FOLDER STRUCTURE into consideration.

//INTO TO JAVASCRIPT EXERCISE

// A. TASK 1:VARIABLES and OPERATORS
// 1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// a variable called “score” and assign it the value “10”.

    let language = 'Javascript';
    let score = 10;

// 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully. Use
// the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).

 let length = 10; 
 let width = 5;
 let area = 10 * 5;

// Write the following to the console using CONCATENATION and BACKTICKS: 
// “The area of the rectangle is …” where … is the area you calculated.
console.log(`the area of the rectangle is ${area}`);
// or
console.log(`the area of the rectangle is ` + area);

// 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
// Calculate and display in the console what the remainder is if num1 is divided by num2.

let num1 = 10;
let num2 = 4;

// or

console.log(10%4);

//or

console.log(`${num1} / ${num2}`);


console.log(num1 % num2);
console.log(num1 / num2);

//be more precise on the question MATTHEW!!

// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks
 
let x = num1 / num2;
let y = num1 % num2;

console.log(`${x} remainder ${y}`);


//or
let answer = Math.floor(10/4);

console.log(`${num1} / ${num2} = ${answer} remainder ${10%4} ${10%4}`);


// B. Task 2:Data Types
// 1. Define the following data types with your own contents
// [ 'integer', 'decimal', 'string', 'array'(minimum: 3 items), 'Object'(minimum: 4 values)]

    let integer = -1; //any number that is whole 
    let decimal = 1.1; //referred to as a float when it is a decimal
    let string = 'Matthew';
    let array = ['mcdonals','kfc', 'burger king','nandos', 'spur'];
    
    const ooject = {
        name: 'Daanyaal',
        surname: 'Girls',
        ages: 87,
        areas: 'South Side'
    }

    let {name, surname, ages, areas} = ooject;

    console.log(ooject);

// 2. Once you’ve created the variables, display them to the console

console.log(integer);
console.log(decimal);
console.log(string);
console.log(array);

// 3. Use the ‘typeof’ function to check each variable

console.log(typeof integer);
console.log(typeof decimal);
console.log(typeof string);
console.log(typeof array);

// 4. Create an array with numbers and strings. Comment what data type you expect this to be. 
// Then use the ‘typeof’ function on this array

let somethingNice = ['Niyaaz', 'Hungry', 1, 'and', 21, 'this is a string and number'];

console.log(typeof somethingNice);

// 5. Create a null variable and an undefined variable

let age = null;
let price;

//const has to have a value so you wouldn't be able to no declare.


// ***********C. Task 3. functions and contional statements************
// N.B. READ WITH UNDERSTANDING!!!
//  1.  Create 3 functions to convert R1000 into dollars, euros and pounds. Take function naming into consideration!

function dollarConvert () {
    let randAmount = 1000;
    let dollarCurrency = 18.42;
    let zarUsd = Math.round(randAmount / dollarCurrency);
    console.log(`Converted Currency is R${zarUsd}`);

   
}
dollarConvert();

function euroConvert ( ){
    let randAmount = 1000;
    let euroCurrency = 19.72;
    let euroZar = Math.trunc(randAmount / euroCurrency);
    console.log(`Converted Curency is R${euroZar}`);

     /*
    function euroConvert () {
        let answer = 1000 * 0.05;
        return answer

        or

        console.log(answer);
    }

    to call function 
    euroCovert();
    */

    /*
    function covertEuro(a.b){
        let answer = a*b;
        return answer
    }
    covertEuro (1000*0.05);
    */
}
euroConvert();

function poundCovert(){
    let randAmount = 1000;
    let poundCurrency = 22.66;
    let poundZar = Math.toFixed(2(randAmount / poundCurrency));
    console.log(`Converted Currency is R${poundCurrency}`);

    /*
    or

    let x = 1000;
    let y = 0.044;

    function covertPound (x,){
        let answer = a / b ;
        return answer
    }
    convertPound(x, 22.84);
    */

    /*
    let answer = Math.round(a / b * 100) /100;
    return answer
    */
    
}
poundCovert();

//  2.  Create a function that takes a value and calculates the amount entered including VAT (15%), amount entered should be R400.
//      Then display the message in the console, "The amount after tax is ...".

    function calculateVat (){
        let amountEntered = 400;
        let vatAmount = 15;
        let calculatedAmount = (amountEntered * vatAmount) / 100;
        console.log(`The Amount of Tax is R${calculatedAmount + amountEntered}`);

        /*
        OR

        function VAT(){
            let answer = (400 * 115) / 100;
            let answer2 = 400*0.015;

            return answer2 + 400
        }
        */
    }
    calculateVat();

//  3.  Declare 3 variables 1stNum, 2ndNum, 3rdNum and assign values of 8, 20 and 14 respectfully. Now write a function that compares “num1” and “num2” and 
//      displays the larger value.

        let num1st = 8 ;
        let num2nd = 20; 
        let num3rd = 14;

        display(num1st, num2nd)
        function display(num1st, num2nd){
        if (num1st>num2nd) {
            console.log(num1st);
        } else {
            console.log(num2nd);
        }
    }

        /*
        display (num1st, num2nd)
        function display(num1st, num2nd){
            if (num1st>num2nd){
                console.log(num1st);
            } else {
                console.log(num2nd);
            }
        }
        */


//  4.  Write a function that determines whether “num1” is odd or even and displays the
//      result. (Tip: remember the modulus operator %)

        function oddEven (){
            if (num1st%2==0) {
                console.log(`This number is Even`);
            } else {
                console.log(`This number is Odd`);
            }
        }
        oddEven();

        /*
        function oddOrEven (){
            if(num1st%2 >= 1)
            console.log('odd');
        }else {
            console.log('even');
        }
        */

//  5.  Next, write a JavaScript conditional statement to sort the three numbers(1stNum, 2ndNum, 3rdNum) from largest to smallest.
        if (num1st>num2nd && num1>num3rd){
            if(num2nd>num3rd){
            console.log(`${num1st} , ${num2nd}, ${num3rd}`);
        }else {
            console.log(`${num1st}, ${num3rd}, ${num2nd}`);
        }
        }
        else if (num2nd>num1st && num2nd>num3rd) {
            if(num1st>num3rd){
                console.log (`${num2nd}, ${num1st}, ${num3rd}`);
            }else {
                console.log(`${num2nd}, ${num3rd}, ${num1st}`);
            }
        }
        else {
            if (num1st>num2nd){
                console.log(`${num3rd}, ${num1st}, ${num2nd}`);
            }else {
                console.log(`${num3rd}, ${num2nd}, ${num1st}`);
            }
        }

        /*
        if (num1st > num2nd && num1st > num3rd){
            if (num2nd>num3rd){
                    console.log(`${num1st}, ${num2nd}, ${num3rd})`;
            }else {
                console.log(`${num1st}, ${num3nd}, ${num2rd})`;
            }
        } else if (num2nd>num1st && num2nd>num3rd){
            if (num1st > num3rd){
                 console.log(`${num2nd}, ${num1st}, ${num3rd})`;
            }else {
                  console.log(`${num2nd}, ${num3rd}, ${num1st})`;
            }
             else {
            if (num1st>num2nd){
                console.log(`${num3rd}, ${num1st}, ${num2nd}`);
            }else {
                console.log(`${num3rd}, ${num2nd}, ${num1st}`);
            }
        }// we don't need to run another else if because 3rd is the last 
 
        }
        */
           