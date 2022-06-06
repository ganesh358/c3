



 
//querySelector("#wallet_balance").innerText = total;


async function getData(){


    try{


        let res = await  fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)

        let data = await res.json();
     
     let data1 = data[0].vouchers

          getData2(data1)
       
         // console.log(data)
      
    }
    catch(err){
        console.log(err)
    }
}
getData()



function getData2(data){

   // console.log(data)
     
    data.forEach(function(el){
        let div1 = document.getElementById("voucher_list")
         let div = document.createElement("div");
         
        let image1 = document.createElement("img");
        image1.src = el.image;

        let name1 = document.createElement("p");
        name1.innerText = el.name;
    
        let price1 = document.createElement("h3");
        price1.innerText = el.price;



       let btn = document.createElement("button");
       btn.innerText = "Buy";
       btn.setAttribute("class","buy_voucher")
       btn.addEventListener("click",function(){
           addVoucher(el);
       })

        div.append(image1,name1,price1,btn)
        

         div1.append(div);

        // div1.append(div)

        
    })

    
}

var Data22 = JSON.parse(localStorage.getItem("purchase"))||[];
   function addVoucher(el){
         Data22.push(el);3

         localStorage.setItem("purchase",JSON.stringify(Data22));

         window.location.reload();
   }