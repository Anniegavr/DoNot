"use strict";

function addToList(){
    let task = document.querySelector(".BOX2");

    let list = document.querySelector(".line");

    let addTask = document.querySelector(".btn");

    addTask.addEventListener("click" , ()=>{

        list.insertAdjacentHTML(`afterbegin` , `<li>
    
                <i class="fas fa-trash-alt deleteTask"></i>
                
                <h4>${task.value}</h4>
                
            </li>`);

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

        list.insertAdjacentHTML(`afterbegin` , `<li>
    
                <i class="fas fa-trash-alt deleteTask"></i>
                
                <h4>${task.value}</h4>
                
            </li>`);

        task.value = "";

        let deleteTask = document.querySelectorAll(".deleteTask");

        deleteTask.forEach(del =>{

            del.addEventListener("click" , ()=>{
                del.parentElement.remove();
            })
        })
    })
}


