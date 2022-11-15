const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
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

//   Que : Declare an empty array ?

let arr = Array();
console.log(arr);

// Que : Find the length of your array ? 

let length = webTechs.length;
console.log(`length of array [${webTechs}] : ${length}`);

// Que : Get the first item, the middle item and the last item of the array ?

let arr1 = [];
let firstItem = webTechs[0];
arr1.push(firstItem);

let middleItem = webTechs[3];
arr1.push(middleItem);

let lastItem = webTechs[6];
arr1.push(lastItem);

console.log(arr1);


// Que : Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let arr2 = ['HTML', 'CSS', 'JavaScript', 2, 3, 'React', 4.5, 'Redux',];

let findLength = arr.length;
if (findLength <= 5) {
    console.log(`[${arr2}] --> array size is greater than 5`);
} else {
    console.log('less than 5');
};

// Que : Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon & Print the array using console.log() & Print the number of companies in the array & Print the first company, middle and last company & Print out each company ?

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies);

let companies_length = itCompanies.length;
console.log(`Number of companies ${companies_length}`);

let firstCmpny = itCompanies.slice(0,1);
console.log(firstCmpny);

let middleCmpny = (itCompanies.length-1)/2
console.log(itCompanies[middleCmpny]);

let lastCmpny = itCompanies.slice(-1);
console.log(lastCmpny);


// Que : Change each company name to uppercase one by one and print them out ?

const upper = itCompanies.map(element => {
    return element.toUpperCase()
});

console.log(upper);


// Que : Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies ? 

let joining1 = itCompanies.slice(0, itCompanies.length - 1);
let joining2 = itCompanies.slice(-1)
console.log(`${joining1} and ${joining2} are big IT companies`);


// Que : Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found ?

// let userInput = 'Google';

// for(let i=0; i<=itCompanies.length-1; i++){
//     if(userInput === itCompanies[i]){
//         console.log('Company found');
//     }else{
//         console.log('Company is not found');
//     }
// };

// Que : Sort the array using sort() method ?

let sorting = itCompanies.sort();
console.log(sorting);

// Que : Reverse the array using reverse() method ?

const newArr = [1,2,3,4,5,6,7,8,9];
let reversing = newArr.reverse();
console.log(reversing);


// Que : Slice out the first 3 companies from the array ?

let firstThree = itCompanies.slice(0,3);
console.log(firstThree);

// Que : Slice out the last 3 companies from the array ?

let lastThree = itCompanies.slice(itCompanies.length-3 , itCompanies.length);
console.log(lastThree);

// Que : Slice out the middle IT company or companies from the array ?

let mid_element = (itCompanies.length-1)/2;
console.log(itCompanies[mid_element]);

// Que : Remove the first IT company from the array ?
let ITCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

let RC = ITCompanies.shift();
console.log(`Remove element from the array ${RC}`);

// Que : Remove the middle IT company or companies from the array ?

let IT2Companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let RMC = (IT2Companies.length-1)/2;
console.log(`Remove middle element from the array ${IT2Companies[RMC]}`);

// Que : Remove the last IT company from the array ?

let Remove_last = IT2Companies.pop();
console.log(Remove_last);

// Que : Remove the last IT company from the array ? 

let ITcompany = IT2Companies.forEach(element=>{
   return element.pop;
});

console.log(ITcompany);














