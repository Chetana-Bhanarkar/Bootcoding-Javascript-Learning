let count = 0 ;
let number = 50;
let temp = number;

while(number != 0){
    if(number % 2 == 0){
        number = number/2
    }
    else{
        number = number-1
    }
    count++
    console.log(number);
}
console.log(`total step ${count}`);
