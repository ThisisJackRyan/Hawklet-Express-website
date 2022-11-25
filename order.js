




window.onload = function thanks(){
    console.log("Shout out to Benton Diebold for alot on the java script for a privous project together");
}
/*var options = toToggle.querySelector(".options");
  var checkout = toToggle.querySelector(".checkout");
  options.classList.toggle("hidden");
  checkout.classList.toggle("hidden");*/
 

  function expandItem(num){
    var temp = "#dropDown" + num;
    document.querySelector(temp).classList.toggle("hidden");
    if(document.getElementById("dropDown" + num).classList.contains('hidden') && !document.getElementById("more" + num).classList.contains("hidden")){
      document.querySelector("#more" + num).classList.toggle("hidden");
  }
}


  function Ordered(num){
      document.querySelector("#more" + num).classList.toggle("hidden");
      document.getElementById("insertName" + num).innerHTML = localStorage.getItem("name");
      document.getElementById("insertNum" + num).innerHTML = localStorage.getItem("phoneNumber");

  }

  