const input = document.getElementById("text");
const container = document.getElementById("container-task");

function addtask(){
    if(input.value === ""){
        alert("arey bhai likh toh le kuch");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value;
        container.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    savedata();
}

container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata(); 
    }
}, false);

function savedata(){
    localStorage.setItem("data", container.innerHTML);
}

function showdata(){
    container.innerHTML = localStorage.getItem("data");
}
showdata();