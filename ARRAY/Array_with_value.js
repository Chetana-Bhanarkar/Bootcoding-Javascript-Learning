const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']


console.log('Numbers : ', numbers);
console.log(`length of numbers : ${numbers.length}`);

console.log('Fruits : ', fruits);
console.log(`length of fruits : ${fruits.length}`);

console.log(' vegetables: ', vegetables );
console.log(`length of fruits : ${vegetables.length}`);

console.log(' animalProducts: ',animalProducts) ; 
console.log(`length of fruits : ${animalProducts.length}`);

console.log(' webTechs: ',webTechs );
console.log(`length of fruits : ${webTechs.length}`);

console.log(' countries: ',countries);
console.log(`length of fruits : ${countries}`);



// split the string ---------------------


let js = 'javascript'  
const character = js.split('');

console.log(character);

// Methods to manipulate array  ----------------------


let arr = Array();
console.log(arr);

let Things = Array(6);
console.log(Things);


let filling = Array(8).fill(4);
console.log(filling);



// concatenation of two array --------------------


let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 =  arr1.concat(arr2);

console.log(arr3);

let arr4 = arr3.indexOf(4);
console.log(arr4);



const fruit = ['banana', 'orange', 'mango', 'lemon'];
let indexOfFruit = fruit.indexOf('lemon');

let findIndex = indexOfFruit === -1 ? console.log('Fruit does not exist in the arrar') : console.log(`fruits does exists in the ${indexOfFruit} index position `);


let check = Array.isArray(fruit);
console.log(check);

// array to string ------------------

const num = [1, 2, 3, 4, 5]
console.log(num.toString());

console.log(fruit.toString());;

console.log(num.join(','));

console.log(num);
const reverse = num.reverse();
console.log(reverse);

// sorting------------------------

const webTechnologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const sorting = webTechnologies.sort()
  console.log(sorting);

  webTechnologies.reverse()
  console.log(webTechnologies);