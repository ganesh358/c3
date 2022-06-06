
var arr12 = JSON.parse(localStorage.getItem("purchase")) || []

console.log(arr12);


arr12.map(function(el){

    let div1 = document.getElementById("purchased_vouchers")
    let div = document.createElement("div");
         
    let image1 = document.createElement("img");
    image1.src = el.image;

    let name1 = document.createElement("p");
    name1.innerText = el.name;

    let price1 = document.createElement("h3");
    price1.innerText = el.price;

    div.append(image1,name1,price1)

    div1.append(div);

})
