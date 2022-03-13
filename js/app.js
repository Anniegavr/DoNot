"use strict";

function addToList(){
    let task = document.querySelector(".BOX2");

    let list = document.querySelector(".line");

    let addTask = document.querySelector(".btn");
    let attachFile = document.querySelector(".attach")
    // let imgUpload = document.querySelector(".attach");


    addTask.addEventListener("click" , ()=>{

        list.insertAdjacentHTML(`afterbegin` , `<li class="container">
                <!--                here comes the task-->
                <i draggable="true" class="fas fa-trash-alt deleteTask " ></i> 

                <h4 draggable="true" class="dragbox">${task.value}</h4>
                
            </licontainer>`);

        task.value = "";

        let deleteTask = document.querySelectorAll(".deleteTask");

        deleteTask.forEach(del =>{

            del.addEventListener("click" , ()=>{
                del.parentElement.remove();
            })
        })
    })
}

function showPreview(event) {
    let task = document.querySelector(".BOX2");

    let list = document.querySelector(".line");

    let attachFile = document.querySelector("#file-ip-1")
    // let imgUpload = document.querySelector(".attach");

    attachFile.addEventListener("click" , ()=>{
        if (event.target.files.length > 0) {
            var src = URL.createObjectURL(event.target.files[0]);
            var preview = document.getElementById("file-ip-1-preview");
            
            preview.src = src;
            preview.style.display = "block";
            list.insertAdjacentHTML(`afterbegin` , `<li class="container">
                <!--                here comes the task-->
                <i draggable="true" class="fas fa-trash-alt deleteTask" ><picture><source srcset="src"></picture></i>
                
            </licontainer>`);
        }

            

        task.value = "";

        let deleteTask = document.querySelectorAll(".deleteTask");

        deleteTask.forEach(del =>{

            del.addEventListener("click" , ()=>{
                del.parentElement.remove();
            })
        })
    })

}
    function addToList2(){
    let task = document.querySelector(".BOX2_1");

    let list = document.querySelector(".line_1");

    let addTask = document.querySelector(".btn_1");

    addTask.addEventListener("click" , ()=>{

        list.insertAdjacentHTML(`afterbegin` , `<li ondragend="dragOver()">
    
                <i draggable="true" class="fas fa-trash-alt deleteTask_1 dragbox"></i>
                
                <h4 draggable="true" style="text-decoration: line-through">${task.value}</h4>
                
            </li>`);

        task.value = "";

        let deleteTask = document.querySelectorAll(".deleteTask_1");

        deleteTask.forEach(del =>{

            del.addEventListener("click" , ()=>{
                del.parentElement.remove();
            })
        })
    });
}


/* draggable element */
const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const boxes = document.querySelectorAll('.dragbox');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}