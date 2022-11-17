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

// QUE : Find the middle country(ies) in the countries array ?

let midCountry = (countries.length-1)/2;
console.log(countries[midCountry]);

// QUE : Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half ?

let even= [];
let odd= [];

if(countries%2 === 0){
    for(i=0;i<(countries.length)/2; i++){
        even.push(countries);
    }
}

console.log(even);



