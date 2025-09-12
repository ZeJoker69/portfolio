let num = 7;

for (let i = 1; i <= 12; i++){
    console.log(num + ' X ' + i + ' = ' + (num*i));
};

function add(a, b){
    return a + b;
};
function sub(a, b){
    return a - b;
};
function multiply(a, b){
    return a * b;
};
function divide(a, b){
    return a / b;
};

console.log(add(10, 5));
console.log(sub(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

let count = 0;


let countDisplay = document.getElementById('count');
let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');
let resetBtn = document.getElementById('reset');

increaseBtn.addEventListener('click', 
function(){
    count++;
    countDisplay.innerHTML = count
});

decreaseBtn.addEventListener('click', 
function(){
    count--;
    countDisplay.innerHTML = count
});

resetBtn.addEventListener('click', 
function(){
    count= 0;
    countDisplay.innerHTML = count
});

let input = document.getElementById('name');
let button = document.getElementById('touch');
let message = document.getElementById('message');

button.addEventListener('click', 
function(){
    let name = input.value
    if (name >= 18){
        message.innerHTML = 'welcome'
    }
    
});