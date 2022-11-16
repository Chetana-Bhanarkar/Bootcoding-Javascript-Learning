let char = prompt('Enter the string');
let char1 = char.toLowerCase();

let split = char1.split('');
console.log(split);

let found = false;
for (let i = 0; i < char1.length; i++) {
    for (let j = i; j <= char1.length-1; j++) {
        if (char1[i] === char1[j+1]) {
            found = true;
        }
    }
}

if(!found){
    console.log('isogram');
}
else{
    console.log('not isogram');
}
