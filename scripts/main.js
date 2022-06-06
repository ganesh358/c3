

function Vouchars(name,email,address,amount){
      this.name = name;
      this.email = email;
      this.address = address;
      this.wallet = amount
}

var voucharData1 = JSON.parse(localStorage.getItem("user")) ||[]



function voucharData(e){
 
    e.preventDefault();

    let form = document.getElementById("Data")

    let name = form.name.value;

    let email = form.email.value;

    let address = form.address.value;

    let wallet = Number(form.amount.value);

    let p = new Vouchars(name,email,address,wallet);


    voucharData1.push(p)

    localStorage.setItem("user",JSON.stringify(voucharData1));

    window.location.reload();


  

}


 