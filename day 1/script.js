const NUM =10
let _name = "Shakti\n\n"
console.log(_name);

function callme(a,b){
    return a*b;
}

let arr = ['s','h','a','k','t','i'];
let obj = {
    first:1,
    second:2
}
console.log(arr);
arr.pop();
console.log(arr);

function isPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
let array = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<array.length;++i){
    if(array[i]%2===0){
        console.log(array[i]);
    }
    if(isPrime(array[i])){
        console.log("Prime: "+array[i]);
    }
}
