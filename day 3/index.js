const data = [
    {
        img : "https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg",
        title:"Pizza",
        rating: 4.5,
        recipe :"2 cup all purpose flour, 100 ml tomato ketchup, 1 tomato, 2 onion, 1 teaspoon chilli flakes, 1 teaspoon baking powder\\\
        1 teaspoon sugar, 100 gm processed cheese, 4 mushroom, 1/2 capsicum (green pepper), 1 teaspoon oregano"
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xYlcbcD61eD7Xrp0kdQrnm4sy6G2vIszdg&usqp=CAU",
        title:"Momo",
        rating: 4.9,
        recipe :"1 tablespoon Oil, 3-4 cloves of Garlic, finely chopped, 1 teaspoon finely chopped Ginger, 1/2 cup finely chopped Carrot\\\
        1/2 cup finely chopped Cabbage, 1/4 cup finely chopped Capsicum, 1/4 cup finely chopped Green French Beans (fanasi), 1/4 cup finely chopped Green Onion or Onion"
    },
    {
        img : "https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg",
        title:"Pizza",
        rating: 4.5,
        recipe :"2 cup all purpose flour, 100 ml tomato ketchup, 1 tomato, 2 onion, 1 teaspoon chilli flakes, 1 teaspoon baking powder\\\
        1 teaspoon sugar, 100 gm processed cheese, 4 mushroom, 1/2 capsicum (green pepper), 1 teaspoon oregano"
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xYlcbcD61eD7Xrp0kdQrnm4sy6G2vIszdg&usqp=CAU",
        title:"Momo",
        rating: 4.9,
        recipe :"1 tablespoon Oil, 3-4 cloves of Garlic, finely chopped, 1 teaspoon finely chopped Ginger, 1/2 cup finely chopped Carrot\\\
        1/2 cup finely chopped Cabbage, 1/4 cup finely chopped Capsicum, 1/4 cup finely chopped Green French Beans (fanasi), 1/4 cup finely chopped Green Onion or Onion"
    },
    {
        img : "https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg",
        title:"Pizza",
        rating: 4.5,
        recipe :"2 cup all purpose flour, 100 ml tomato ketchup, 1 tomato, 2 onion, 1 teaspoon chilli flakes, 1 teaspoon baking powder\\\
        1 teaspoon sugar, 100 gm processed cheese, 4 mushroom, 1/2 capsicum (green pepper), 1 teaspoon oregano"
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xYlcbcD61eD7Xrp0kdQrnm4sy6G2vIszdg&usqp=CAU",
        title:"Momo",
        rating: 4.9,
        recipe :"1 tablespoon Oil, 3-4 cloves of Garlic, finely chopped, 1 teaspoon finely chopped Ginger, 1/2 cup finely chopped Carrot\\\
        1/2 cup finely chopped Cabbage, 1/4 cup finely chopped Capsicum, 1/4 cup finely chopped Green French Beans (fanasi), 1/4 cup finely chopped Green Onion or Onion"
    },
    {
        img : "https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg",
        title:"Pizza",
        rating: 4.5,
        recipe :"2 cup all purpose flour, 100 ml tomato ketchup, 1 tomato, 2 onion, 1 teaspoon chilli flakes, 1 teaspoon baking powder\\\
        1 teaspoon sugar, 100 gm processed cheese, 4 mushroom, 1/2 capsicum (green pepper), 1 teaspoon oregano"
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xYlcbcD61eD7Xrp0kdQrnm4sy6G2vIszdg&usqp=CAU",
        title:"Momo",
        rating: 4.9,
        recipe :"1 tablespoon Oil, 3-4 cloves of Garlic, finely chopped, 1 teaspoon finely chopped Ginger, 1/2 cup finely chopped Carrot\\\
        1/2 cup finely chopped Cabbage, 1/4 cup finely chopped Capsicum, 1/4 cup finely chopped Green French Beans (fanasi), 1/4 cup finely chopped Green Onion or Onion"
    },
    {
        img : "https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg",
        title:"Pizza",
        rating: 4.5,
        recipe :"2 cup all purpose flour, 100 ml tomato ketchup, 1 tomato, 2 onion, 1 teaspoon chilli flakes, 1 teaspoon baking powder\\\
        1 teaspoon sugar, 100 gm processed cheese, 4 mushroom, 1/2 capsicum (green pepper), 1 teaspoon oregano"
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xYlcbcD61eD7Xrp0kdQrnm4sy6G2vIszdg&usqp=CAU",
        title:"Momo",
        rating: 4.9,
        recipe :"1 tablespoon Oil, 3-4 cloves of Garlic, finely chopped, 1 teaspoon finely chopped Ginger, 1/2 cup finely chopped Carrot\\\
        1/2 cup finely chopped Cabbage, 1/4 cup finely chopped Capsicum, 1/4 cup finely chopped Green French Beans (fanasi), 1/4 cup finely chopped Green Onion or Onion"
    },
]
//create ele for the data
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