let num = []
for(let i=1;i<=10;i++){
    num.push(i);
}

console.log(num);

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// --------------------------------------------------------------

let nums = []
for(let i=10;i>=1;i--){
    nums.push(i);
}

console.log(nums);

// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ---------------------------------------------------------------

let n=4;
for(let i=1;i<=10;i++){
    console.log(`${n} * ${i} = ${n*i}`);
}

// 4 * 1 = 4
// 4 * 2 = 8
// 4 * 3 = 12
// 4 * 4 = 16
// 4 * 5 = 20
// 4 * 6 = 24
// 4 * 7 = 28
// 4 * 8 = 32
// 4 * 9 = 36
// 4 * 10 = 40

// --------------------------------------------------------------


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']

const newArr = [];
for(let i =0 ; i<countries.length; i++){
    newArr.push(countries[i].toUpperCase())
}

console.log(newArr);

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

// ---------------------------------------------------------------

let no = [2,3,4,6,8,7]
let sum=0;
for(let i=0;i<no.length; i++){
    sum += no[i];
};
console.log(sum);

// 30

// ----------------------------------------------------------------


let numb = [1,2,3,4,5];
let sqr = [];
for(let i = 0 ; i<numb.length; i++){
    sqr.push(numb[i]**2);
}

console.log(sqr);

// [1, 4, 9, 16, 25]

// -----------------------------------------------------------------


