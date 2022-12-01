
let menu = [
    ["Strαwberry Smoothie", "StrawBerry-Smoothie.jpg",3.99],
    ["Blueberry Smoothie", "blueberry_smoothie.png",3.99],
    ["Mαngo Smoothie", "Mango_smoothie.jpg", 3.99],
    ["Chocolαte Protein Shαke", "Core_Powder_Chocolate.png", 2.99],
    ["Vαnillα Protein Shαke", "Core_Powder_Vanilla.jpg", 2.99],
    ["Strαwberry Protein Shαke", "Core_Powder_Strawberry.png", 2.99],
    ["McGriddle Sαndwich", "Mcgriddle.jpg", 2.50],
    ["Croissant Sαndwich", "Croissant.jpg", 2.50],
    ["Sαusαge αnd Wαffle Sαndwich", "Sasage&Waffle.jpg", 2.50]
  ];
let cart = [];
let sum = 0;


window.onload = function thanks(){
    console.log("Shout out to Benton Diebold for alot on the java script insperation from a privous project together");
    document.getElementById("insertName").innerHTML = localStorage.getItem("name");
    document.getElementById("insertNum").innerHTML = localStorage.getItem("phoneNumber");
    GenerateCart();
}
/*var options = toToggle.querySelector(".options");
  var checkout = toToggle.querySelector(".checkout");
  options.classList.toggle("hidden");
  checkout.classList.toggle("hidden");*/
 

  function expandItem(num){
    var temp = "#dropDown" + num;
    document.querySelector(temp).classList.toggle("hidden");
  }


  function AddToCart(num){
    let item = menu[num];
    console.log(item);
    cart.push(item);
    console.log(cart);
    GenerateCart();
  }

  /*function GenerateCart(){
    let sum = 0;
    let main = document.getElementById("items");
    if(cart.length <= 0){
      //add is cart is empyt but does not remove if cart is not empty
      let empty = document.createElement("div");
      empty.className = "flex center";
      empty.id="Empty";
      empty.textContent = "Your Cαrt is Empty";
      main.appendChild(empty);
    } else{
      document.getElementById("Empty").textContent = "";
      //outputs img and text below it of item ordered
      for(let i =0; i < cart.length; i++){
        let img = document.createElement("img");
        img.className = "flex center cartItem align";
        img.src = "images/"+cart[i][1];
        let div = document.createElement("div");
        div.className = "flex center ";
        div.textContent = cart[i][0];
        main.appendChild(img);
        main.appendChild(div);

        // gets total price
        sum += cart[i][2];
      }
      let total = document.getElementById("total");
      let tot = document.getElementById("insertTotal");
      tot.className = "flex center";
      
      tot.textContent = "$" + sum; 
      total.appendChild(tot);
      
    }
  }*/

 
    function GenerateCart(){
      let main = document.getElementById("items");
      if(cart.length <= 0){
        //add is cart is empyt but does not remove if cart is not empty
        let empty = document.createElement("div");
        empty.className = "flex center";
        empty.id="Empty";
        empty.textContent = "Your Cαrt is Empty";
        main.appendChild(empty);
      } else{
        document.getElementById("Empty").textContent = "";

        if((cart.length-1) % 3 == 0){
          row = document.createElement("div");
          row.className = "flex";
        }

        item = document.createElement("div");
        item.className = "x1";

        let img = document.createElement("img");
        img.className = "flex center cartItem align";
        img.src = "images/"+cart[cart.length-1][1];

        let div = document.createElement("div");
        div.className = "flex center ";
        div.textContent = cart[cart.length-1][0];

        item.appendChild(img);
        item.appendChild(div);

        row.appendChild(item);

        main.append(row);


        let total = document.getElementById("total");
        let tot = document.getElementById("insertTotal");
        tot.className = "flex center";
        
        sum += cart[cart.length-1][2];
        console.log(sum);
        tot.textContent = "$" + Math.round(100*sum)/100; 
        total.appendChild(tot);
      }
}
 