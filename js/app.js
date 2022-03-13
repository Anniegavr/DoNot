"use strict";
const buttons = document.querySelectorAll(".btn");
let i = 0, length = buttons.length;
// for (i; i < length; i++) {
//     if (document.addEventListener) {
//         buttons[i].addEventListener("click", function() {
//             // use keyword this to target clicked button
//         });
//     } else {
//         buttons[i].attachEvent("onclick", function() {
//             // use buttons[i] to target clicked button
//         });
//     }
// }
window.onload=function(){
    let task = document.querySelectorAll(".BOX2");

    let list = document.querySelectorAll(".line");

    let addTask = document.querySelectorAll(".btn");
    for (i; i < length; i++) {
        if (document.addEventListener){
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
            })} else {
            buttons[i].attachEvent("onclick", function() {

                // use buttons[i] to target clicked button
            });
        }
        }
    // else {
    //     buttons[i].attachEvent("onclick", function() {
    //         // use buttons[i] to target clicked button
    //     });
    // }
    }

    // addTask.addEventListener("click" , ()=>{
    //
    //     list.insertAdjacentHTML(`afterbegin` , `<li>
    //
    //             <i class="fas fa-trash-alt deleteTask"></i>
    //
    //             <h4>${task.value}</h4>
    //
    //         </li>`);
    //
    //     task.value = "";
    //
    //     let deleteTask = document.querySelectorAll(".deleteTask");
    //
    //     deleteTask.forEach(del =>{
    //
    //         del.addEventListener("click" , ()=>{
    //             del.parentElement.remove();
    //         })
    //     })
    // })}

