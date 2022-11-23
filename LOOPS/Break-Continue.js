// BREAK-----------------
let a = []
for(let i=1;i<=10;i++){
    if(i==5){
        break;
    }
    a.push(i);
}

console.log(a);


// CONTINUE-----------------
let arr = []
for(let i=1 ; i<=10 ; i++){
    if(i==6){
        continue;
    }
    arr.push(i);
}

console.log(arr);