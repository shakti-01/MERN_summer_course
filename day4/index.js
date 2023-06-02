fetch("http://localhost:8080/food",{
    method: "GET"
}).then(async (res)=>{
    const data = await res.json();
    console.log(data);
    data.map((ele)=>{
        const movies = document.getElementById("movie-content");
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = ele.img;
        const title = document.createElement("h2");
        title.innerText=ele.title;
        const rating = document.createElement("span");
        rating.innerHTML = "&#9733; " + ele.rating;
        const btnShow = document.createElement("button");
        const btnHide = document.createElement("button");
        const ingredient = document.createElement("p");
        btnShow.innerText = "Check it out";
        btnHide.innerText = " X ";
        btnHide.addEventListener("click",()=>{
            ingredient.innerHTML = "";
        });
        btnShow.addEventListener("click",()=>{
            ingredient.innerText = ele.recipe;
            ingredient.appendChild(btnHide);
        });
        div.append(img,title,rating,btnShow,ingredient);
        movies.appendChild(div);
    });
}).catch((err)=>{
    console.log(err);
})

function addFood(){
    const img = document.getElementById('img').value;
    const title = document.getElementById('title').value;
    const rating = document.getElementById('rating').value;
    const recipe = document.getElementById('recipe').value;
    fetch("http://localhost:8080/food",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "id":Date.now(),
            "img":img,
            "title":title,
            "rating":rating,
            "recipe":recipe
        })
    }).then(async (res)=>{
        const data = await res.json();
        console.log(data);
        alert("food added");
        
    }).catch((err)=>{
        console.log(err);
    });
}


/* -----------------auth stuff---------- */
const createBtn = document.getElementById("create");

createBtn.addEventListener("click",()=>{
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    console.log(email,pass);
    fetch("http://localhost:8080/data",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "id":Date.now(),
            "email":email,
            "pass":pass
        })
    }).then(async (res)=>{
        const data = await res.json();
        console.log(data);
        alert("your account has been created. Login now");
        
    }).catch((err)=>{
        console.log(err);
    })
})
/* ----------------------- */
function signin(){
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    fetch("http://localhost:8080/data",{
        method: "GET",
    }).then(async (res)=>{
        const data = await res.json();
        let flag=0;
        for(let i=0;i<data.length;++i){
            if(data[i].email == email && data[i].pass == pass){
                alert("Your password is correct . U r logged in !!");
                flag=1;
                window.location.href='./index.html';
                break;
            }
        }
        if(flag==0){
            alert("You gave wrong password or email");
        }
        
    }).catch((err)=>{
        console.log(err);
    })
}