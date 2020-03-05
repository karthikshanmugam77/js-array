// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//------------- ARRAY FUNCTION -----------------

var cars = ["Saab", "Volvo", "BMW","BENZ","HONDA"];//ARRAY

cars.forEach(a =>console.log(a)) //prints every element in ARRAY
                                //output : 
//---------------- MAP -----------------
const array1 = [1, 4, 9, 16]; 
const map1 = array1.map(x => x * 2); //multiplying by 2 
console.log(map1);     //output :2, 8, 18, 32

//------------- FILTER -----------------

const result = cars.filter(word => word.length > 4);

console.log(result); //output 

//------------ INCLUDE --------------------

console.log( cars.includes("BMW")); //checks in array if it is presnt
                                    //output : true

//------------ INDEXOF -----------------

const indexOfFirst = cars.indexOf('BMW'); //returns index of search string
console.log(indexOfFirst);

//----------- FIND INDEX ----------------

const findIndex = cars.findIndex( a=> a>);
console.log(findIndex);

//------------- 