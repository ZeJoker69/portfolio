// Day 9

// let options = document.getElementsByClassName('option');
// let options = document.querySelectorAll('.option');
// let options1 = document.querySelectorAll('.option1');
// let options2 = document.querySelectorAll('.option2');
// let result = document.getElementById('result');
// let result1 = document.getElementById('result1');
// let result2 = document.getElementById('result2');
// let answers = [4, 27, 19];
// let count = 0
// let score = document.getElementById('score')


// // for (let index = 0; index < 2; index++) {
// //     // const element = array[index];
// //     options[index].forEach(btn => {
// //     btn.addEventListener('click',
// //         function(){
// //             if(btn.textContent === answers[index]){
// //                 result[index].textContent = 'Correct';
// //             }
// //             else{
// //                 result[index].textContent = 'Wrong';
// //             }
// //         }
// //     )
// // });
// // }

// options.forEach(btn => {
//     btn.addEventListener('click',
//         function(){
//             if(btn.textContent === '4'){
//                 result.textContent = 'Correct';
//                 score.textContent = count += 1;
                
//             }
//             else{
//                 result.textContent = 'Wrong';
//             }
//         }
//     )
// });

// options1.forEach(btn => {
//     btn.addEventListener('click',
//         function(){
//             if(btn.textContent === '27'){
//                 result1.textContent = 'Correct';
//                 score.textContent = count += 1;
//             }
//             else{
//                 result1.textContent = 'Wrong';
                
//             }
//         }
//     )
// });

// options2.forEach(btn => {
//     btn.addEventListener('click',
//         function(){
//             if(btn.textContent === '19'){
//                 result2.textContent = 'Correct';
//                 score.textContent = count += 1;
//             }
//             else{
//                 result2.textContent = 'Wrong';
//             }
//         }
//     )
// });

// Day 10 - Calculator
// let n1 = document.getElementById('num1');
// let n2 = document.getElementById('num2');
// let calc = document.getElementById('calc');
// let add = document.getElementById('addBtn');
// let sub = document.getElementById('subBtn');
// let mul = document.getElementById('mulBtn');
// let div = document.getElementById('divBtn');


// add.addEventListener('click', 
//     function(){
//         if (n1.value === '' || n2.value === '' ){
//             calc.textContent = "All fields required!!!";
//         }
//         else{
//             calc.textContent = Number(n1.value) + Number(n2.value);
//         }
        
//     }
// )

// sub.addEventListener('click', 
//     function(){
//         if (n1.value === '' || n2.value === '' ){
//             calc.textContent = "All fields required!!!";
//         }
//         else{
//             calc.textContent = Number(n1.value) - Number(n2.value);
//         }
//     }
// )

// mul.addEventListener('click', 
//     function(){
//         if (n1.value === '' || n2.value === '' ){
//             calc.textContent = "All fields required!!!";
//         }
//         else{
//             calc.textContent = Number(n1.value) * Number(n2.value);
//         }
//     }
// )

// div.addEventListener('click', 
//     function(){
//         if (n1.value === '' || n2.value === '' ){
//             calc.textContent = "All fields required!!!";
//         }
//         else{
//             calc.textContent = Number(n1.value) / Number(n2.value);
//         }
//     }
// )


// Day 11
// let EList = document.getElementById('EList');
// let Total = document.getElementById('total');
// let Abtn = document.getElementById('addExp')
// let total = 0;

// Abtn.addEventListener('click', 
//     function(){
//         let desc = document.getElementById('desc').value;
//         let amt = document.getElementById('amount').value;
        
//         if (desc && amt > 0){
//             let li = document.createElement('li');
//             li.textContent =   `${desc} : $${amt}`;
//             EList.appendChild(li);

//             total += Number(amt);
//             Total.textContent = 'Total: $' + total;
            
//         }
//     }
// )

// Day 12.2
let Nbox = document.getElementById('note');
let Snote = document.getElementById('SDnote');
// let list = document.getElementById('list');
let addBtn = document.getElementById('addBtn');
// let Alist = [1, 2, 3, 4]
//load saved
// Snote.textContent = localStorage.getItem('item') || "";
// save new
// Nbox.addEventListener('input', () => {
//     Alist.push(Nbox.value)
//     localStorage.setItem('item', Alist);
    
// });

// load saved notes when page reloads
window.onload = function(){
    let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.forEach(note => {
        createNote(note);
    });
}

addBtn.addEventListener('click',
    function() {
        let Ttext = Nbox.value.trim();
        // let item = list.value

        if (Ttext === "") {
            alert('Please write something')
        }
        else {
            createNote(Ttext);
            saveNote(Ttext);
            Nbox.textContent = '';
            
        };
    }
);

    
// create note box
function createNote(Ttext){
    
    // create note box
    let Ndiv = document.createElement('div');
    Ndiv.style.border = '1px solid black';
    Ndiv.style.padding = '10px';
    Ndiv.style.margin = '10px 0px';

    // create a paragraph for one note
    let p = document.createElement('p');
    p.textContent = Ttext;

    // edit button
    let edBtn = document.createElement('button');
    edBtn.textContent = 'Edit';
    edBtn.style.marginLeft = '10px';
    edBtn.addEventListener('click', 
        function(){
            let newT = prompt('Edit your note: ', p.textContent);
            if (newT !== null && newT.trim() !== ''){
                // update display
                p.textContent = newT;

                // update localstorage
                updateNote(Ttext, newT);

                // Replacing old text to new in memory
                Ttext = newT;
            }
        }
    );

    // delete button
    let delBtn = document.createElement('button');
    delBtn.textContent = 'XX';
    delBtn.style.marginLeft = '10px';
    delBtn.addEventListener('click', 
        function(){
            Ndiv.remove();
            deleteNote(Ttext)
        }
    );

    // append everything
    Ndiv.appendChild(p);
    Ndiv.appendChild(delBtn);
    Ndiv.appendChild(edBtn);
    Snote.appendChild(Ndiv)
}

// save notes to localstorage
function saveNote(Ttext){
    let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.push(Ttext);
    localStorage.setItem('notes', JSON.stringify(savedNotes))
}