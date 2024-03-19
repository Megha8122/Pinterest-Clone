var arr= [
    {name:"Rose Petals",image:"https://i.pinimg.com/564x/57/83/72/57837215f411835cce77645c59ecbf72.jpg"},
    {name:"Cow",image:"https://i.pinimg.com/564x/e7/3c/fb/e73cfbc297762dd907f860af50ab0af5.jpg"},
    {name:"Clouds",image:"https://i.pinimg.com/736x/66/50/bf/6650bfdd146af8928c1b7bd451862448.jpg"},
    {name:"River",image:"https://i.pinimg.com/564x/dd/8f/ca/dd8fca018e200c3f09dab67c7ace7f62.jpg"},
    {name:"Mountain",image:"https://i.pinimg.com/564x/49/f4/0d/49f40d48ee9372e7e6ebcd312b2ce6c5.jpg"},
    {name:"Rings",image:"https://i.pinimg.com/564x/14/aa/f1/14aaf1c6a7f536590a1e1ad7b11aad9b.jpg"}
]

function showCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter+=`<div class="box">
        <img class="cursor-pointer" src= "${obj.image}" alt="image">
    </div>`;
    })
    document.querySelector(".container").innerHTML = clutter;
}

function handleSearch(){
    var searchInput = document.querySelector("#searchinput")
    
    searchInput.addEventListener("focus",function(){
    document.querySelector(".overlay").style.display = "block"
    })
    searchInput.addEventListener("blur",function(){
    document.querySelector(".overlay").style.display = "none"
    })
    searchInput.addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(searchInput.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter+=`<div class="res flex px-8 py-3>
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>`
        })
        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearch();
showCards();