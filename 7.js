let tasks=[];
let btn=document.getElementById('add_task_button');

let delete_task = function(event){
   let id = event.target.id;
   let element_id=`li_${id}`;
   let elem=document.getElementById(element_id);
    
    console.log(elem);
    elem.remove();
    
    let arr=id.split("_");
    let index = arr[1];
    console.log(index);

    tasks.splice(index,1);
   
    
}
let edit_task=function (event) {
    let id= event.target.id;
    let index = id.split("_")[1];
    let edit_task = prompt("enter the updated task");
    tasks[index]=edit_task;
    display();
}

let display = function(){
    let ul= document.getElementById("task_list")
    ul.innerText="";
    for(let i=0; i<tasks.length; i++){
        let single_tasks = tasks[i];
        
        let new_elem=document.createElement('li');
        new_elem.innerText=single_tasks;
        
        let btn=document.createElement('button');
        btn.innerText="cross";
      btn.addEventListener("click",delete_task);
        
        let btn1=document.createElement('button');
        btn1.innerText="edit";
        btn1.addEventListener("click",edit_task);
      
        btn1.id=`btn1_${i}`;;
        btn.id=`btn_${i}`;
        new_elem.id=`li_btn_${i}`;


        new_elem.appendChild(btn);
        new_elem.appendChild(btn1);
        ul.appendChild(new_elem);
    }
}

let fn= function(){
    let input=document.getElementsByName('task')[0];
    let val = input.value;
    tasks.push(val);
    display();
}

btn.addEventListener('click',fn)


