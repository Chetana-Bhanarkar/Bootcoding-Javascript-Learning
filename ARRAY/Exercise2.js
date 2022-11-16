const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    // 'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]


// QUE : First remove all the punctuations and change the string to array and count the number of words in the array  ? 

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let split_str = text.split(" ")
let sentence_length = split_str;
console.log(split_str);
console.log(sentence_length.length);
console.log(sentence_length.join(' '));


// QUE : In the following shopping cart add, remove, edit items
    
//      const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//      add 'Meat' in the beginning of your shopping cart if it has not been already added
//      remove 'Honey' if you are allergic to honey
//      add Sugar at the end of your shopping cart if it has not been already added
//      modify Tea to 'Green Tea'
      
    // OUTPUT = ['Meat','Milk','Coffee', 'Green Tea','Sugar']

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat');
shoppingCart.pop();
shoppingCart.push('Sugar');
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'; 
console.log(shoppingCart);


// QUE : In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let found = false
for(i=0;i<countries.length; i++){
    if(countries[i] === 'Ethiopia'){
        found = true
    }
}

if(found){
    console.log('Already Present');
}else{
    countries.push("Ethiopia");
    console.log(countries);
}


// QUE : In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array ? 

let find = false
for(let i=0; i<webTechs.length; i++){
    if(webTechs[i] === 'Sass'){
        find = true 
    }
}

if(find){
    console.log('Sass is a CSS preprocess');
}else{
    webTechs.push('Sass');
    console.log(webTechs);
}

// QUE : Concatenate the following two variables and store it in a fullStack variable.
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);