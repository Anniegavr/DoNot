"use strict";
let count = 0;
function addToList(){
    let task = document.querySelector("#taskText");

    let list = document.querySelector(".line");

    // let addTask = document.querySelector(".btn");
    let urlImg = document.querySelector("#imageAtt");
    let input = document.createElement("input");
    input.type="checkbox";
    let liEl = document.createElement("li");
    liEl.id = count;
    let iEl = document.createElement("i");
    iEl.className = "fas fa-trash-alt deleteTask dragbox";
    let h4El = document.createElement("h4");
    h4El.innerHTML=task.value;
    let imgEl = document.createElement("img");
    imgEl.src=urlImg.value;

    input.onclick=function inp(el){
        let selected = document.getElementById(count);
        let rightList = document.querySelector(".line_1");
        rightList.appendChild(liEl);

        // rightList.appendChild();
        console.log(selected);

        // liEl.remove();
    }
    liEl.appendChild(input);
    liEl.appendChild(iEl);
    liEl.appendChild(h4El);
    liEl.appendChild(imgEl);
    list.appendChild(liEl);

    count +=1;
    task.value = "";

    let deleteTask = document.querySelectorAll(".deleteTask");

    deleteTask.forEach(del =>{

        del.addEventListener("click" , ()=>{
            del.parentElement.remove();
        })
    })

}

function addToList2(){

    let task1 = document.querySelector("#newBox2");

    let list1 = document.querySelector("line_1");

    let urlImg = document.querySelector("#imageAtt2");
    // let input = document.createElement("input");
    // input.type="checkbox";
    let liEl1 = document.createElement("li");
    liEl1.id = count;
    let iEl1 = document.createElement("i");
    iEl1.className = "fas fa-trash-alt deleteTask dragbox";
    let h4El1 = document.createElement("h4");
    h4El1.innerHTML=task1.value;
    let imgEl1 = document.createElement("img");
    imgEl1.src=urlImg.value;

    //
    // input.onclick=function inp(el){
    //     let selected = document.getElementById(count);
    //     let rightList = document.querySelector("line");
    //     rightList.appendChild(liEl);
    //
    //     // rightList.appendChild();
    //     console.log(selected);
    //
    //     // liEl.remove();
    // }
    liEl1.appendChild(input);
    liEl1.appendChild(iEl1);
    liEl1.appendChild(h4El1);
    liEl1.appendChild(imgEl1);
    list1.appendChild(liEl1);


    task1.value = "";

    let deleteTask = document.querySelectorAll(".deleteTask2");

    deleteTask.forEach(del =>{

        del.addEventListener("click" , ()=>{
            del.parentElement.remove();
        })
    })

}

//
// /* draggable element */
// const item = document.querySelector('.item');
//
// item.addEventListener('dragstart', dragStart);
//
// function dragStart(e) {
//     e.dataTransfer.setData('text/plain', e.target.id);
//     setTimeout(() => {
//         e.target.classList.add('hide');
//     }, 0);
// }
//
//
// /* drop targets */
// const boxes = document.querySelectorAll('.dragbox');
//
// boxes.forEach(box => {
//     box.addEventListener('dragenter', dragEnter)
//     box.addEventListener('dragover', dragOver);
//     box.addEventListener('dragleave', dragLeave);
//     box.addEventListener('drop', drop);
// });
//
//
// function dragEnter(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }
//
// function dragOver(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }
//
// function dragLeave(e) {
//     e.target.classList.remove('drag-over');
// }
//
// function drop(e) {
//     e.target.classList.remove('drag-over');
//
//     // get the draggable element
//     const id = e.dataTransfer.getData('text/plain');
//     const draggable = document.getElementById(id);
//
//     // add it to the drop target
//     e.target.appendChild(draggable);
//
//     // display the draggable element
//     draggable.classList.remove('hide');
// }