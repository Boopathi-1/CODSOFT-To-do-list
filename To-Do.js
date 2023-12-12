const inputBar=document.querySelector(".row input");
const listContainer=document.querySelector(".taskList");
function addTask(){
    if(inputBar.value === ''){
        alert("Enter Any Task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBar.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBar.value='';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();