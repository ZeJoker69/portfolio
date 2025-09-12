// Day 9
// let Tinput = document.getElementById('Tinput');
// let addBtn = document.getElementById('addBtn');
// let Tlist = document.getElementById('Tlist');


// addBtn.addEventListener('click',
//     function() {
//         let Ttext = Tinput.value;
//         if (Ttext !== "") {
//             let li = document.createElement('li');
//             li.textContent = Ttext;

//             // completed button
//             let comBtn = document.createElement('button');
//             comBtn.textContent = 'done?';
//             comBtn.style.marginLeft = '10px';
//             comBtn.addEventListener('click', 
//                 function(){
//                     comBtn.textContent = 'Completed'
//                 }
//             )

//             // delete button
//             let delBtn = document.createElement('button');
//             delBtn.textContent = 'XX';
//             delBtn.style.marginLeft = '10px';
//             delBtn.addEventListener('click', 
//                 function(){
//                     Tlist.removeChild(li);
//                 }
//             );

            // li.appendChild(delBtn);
            // li.appendChild(comBtn);
            // Tlist.appendChild(li);

//             Tinput.value = ''; // clear input
//         }
//     }
// )
 
// Day 9.2
// function updateClock() {
//     let now = new Date();
//     let time = now.toLocaleTimeString();
//     let date = now.toDateString();

// document.getElementById('clock').textContent = time;
// document.getElementById('date').textContent = date;
// }

// setInterval(updateClock, 1000);
// updateClock();

// document.querySelector('h1').style.color = 'blue';
// document.querySelector('h1').classList.add('highlight');

// let theme = document.getElementById('theme');


// theme.addEventListener('click',
//     function(){
//         document.querySelector('body').style.backgroundColor = 'black';
//     }
// ); 

// // let Body = document.getElementById('body').getAttributeNode('backgroungColor');

// // theme.addEventListener('click',
// //     function(){
// //         let BG = document.querySelector('body').style.backgroundColor;
// //         if (BG == 'white'){
// //             document.querySelector('body').style.backgroundColor = 'black';
// //         }
        
// //     }
// // )


// Day10.1
// let userN = document.getElementById('UserN');
// let PassW = document.getElementById('PassW');
// let signBtn = document.getElementById('signupBtn');
// let feedback = document.getElementById('FeedB');

// signBtn.addEventListener('click',
//     function(){
//         let user = userN.value;
//         let pass = PassW.value;

//         if (user === '' || pass === '' ){
//             feedback.textContent = "All fields required!!!";
//         }
//         else if (user.includes(' ')){
//             feedback.textContent = 'No spaces allowed'
//         }
//         else if (pass.length < 6){
//             feedback.textContent = 'Password must be at least 6 characters';
//         }
//         // else if(' ' in user){
//         //     feedback.textContent = 'No spaces allowed';
//         // }
//         else{
//             feedback.textContent = 'Registrartion Successful';
//         }
//     }
// )

// Day 10.2
// let box = document.getElementById('Tbox');
// let display = document.getElementById('display');

// box.addEventListener('keyup',
//     function(event){
//         display.textContent = 'You Typed ' + box.value + ' and it has ' + box.value.length + ' Characters'; 
//     }
// )

// Day 10.3
// let main = document.getElementById('mainImg');
// let thumbs = document.querySelectorAll('#thumb');

// thumbs.forEach(img => {
//     img.addEventListener('click', 
//         function(){
//             let a = main.src;
//             main.src = img.src;
            
//             // to remove  'active' from all
//             thumbs.forEach(t =>
//                 t.classList.remove('active')
//             );

//             // add 'active' to clicked one
//             img.classList.add('active');
            
//             // img.src = a; 
//         }
//     );
// });

// Day 11.1
// let nums = [1, 2, 3, 4, 5];
// let names = ['chuka', 'annie', 'mekis'];

// let upper = names.map(n => n.toLocaleUpperCase());
// console.log(upper);

// let doubled = nums.map(n => n * 2);
// console.log(doubled)

// let even = nums.filter(n => n % 2 === 0);
// console.log(even)

// let sum = nums.reduce((acc, n) => acc + n);
// console.log(sum)

// Day 11.2
// let a = 2;
// let b = 3;

// let add = (a, b) => a + b;
// console.log(add(2,5));

// let name = 'chuka';
// console.log(`Hello, ${name}`);


// Day 12.1 - Intro to LocalStorage and Data Persistence
// to save
// localStorage.setItem('name', 'chukwuka');
// localStorage.setItem('color', 'Blue');
// // to get
// let n = localStorage.getItem('name');
// console.log(n);
// let c = localStorage.getItem('color');
// console.log(c)
// // to remove
// localStorage.removeItem('name')
// localStorage.removeItem('color')


// Day 12.2
let Nbox = document.getElementById('note');
let Snote = document.getElementById('SdNote');
let list = document.getElementById('list')
let addBtn = document.getElementById('addBtn');
let Alist = []
//load saved
Snote.textContent = localStorage.getItem('item') || "";
// save new
Nbox.addEventListener('input', () => {
    localStorage.setItem('item', Nbox.value);
    
});


// Day 13.1: JSON Basics
// let person = {name: 'Steve', age: 25};
// let str = JSON.stringify(person); //object -> string
// let obj = JSON.parse(str)// string -> object

// console.log(str)
// console.log(obj)


// Day 13.2 Fetch API
// fetch('https:api.github.com/users/octocat')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));
