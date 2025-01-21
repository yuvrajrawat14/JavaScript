'use strict';



// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(startInd, mainInd){
    return [this.starterMenu[startInd], this.mainMenu[mainInd]]
  }
};

// usecase2-
// allow us to write function returning multiple values
// function returns an arr , then we immediately destructure it into variables
console.log(restaurant.order(2, 0));
// receive 2 return values from a function
const [starterOrder, mainOrder] = restaurant.order(2, 0);
console.log(starterOrder, mainOrder);


const arr = [2,3,4];
console.log(arr);
const a = arr[0];
const b = arr[1];
const c = arr[2];
// console.log(a, b, c);

// Destructuring array
// const [x, y, z] = arr; //declaring and defining all 3 var at same time
// console.log(x, y, z);

// destru the categ array taking only 2 ele
console.log(restaurant.categories);
// const [main, secondary] = restaurant.categories;
// put a hole destruc op to skip 2nd ele from array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// usecase1
// switch these var(i.e swap their values)

// without destruc
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// wiht destru
// create a new array with main and secondary reversed
// then destruc it into the var main and secondary
[main, secondary] = [secondary, main]; 
// [secondary, main] = [main, secondary]
console.log(main, secondary);

// destructuring a nested array
const nested = [5,4,[3,8]];
console.log(nested);
const [first, second, third] = nested;
console.log(first, second, third);

// destructuring inside of destructuring
// storing the arr [3, 8] also in diff var
const [x, y, [z1, z2]] = nested;
console.log(x, y, z1, z2);

// const [p, q, r] = [8, 9];
// console.log(p, q, r); // r is undefined

// setting up default values
const [p = 1, q = 1, r = 1] = [8, 5];
console.log(p, q, r);