console.log("works");
function add(){
    const content1 = document.getElementById("content1");
    const content2 = document.getElementById("content2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.innerHTML = "Hi im in flexbox";
    p2.innerHTML = "hi im in grid";
    content1.appendChild(p1);
    content2.appendChild(p2);
}
function remove(){
    const content1 = document.getElementById("content1");
    const content2 = document.getElementById("content2");
    content1.innerHTML = "";
    content2.innerHTML = "";
}