



window.onload = function load(){
    let inputName = document.getElementById("accountName");
    let inputNum = document.getElementById("phoneNumber");
    if (localStorage.getItem('name') === null) {
        inputName.setAttribute("placeholder", "Name...");
      } else {
        const storedName = localStorage.getItem("name");
        inputName.setAttribute("value", storedName);
      }
    if(localStorage.getItem("phoneNumber") === null){
        inputNum.setAttribute("placeholder", "816-548-5390...");
    } else{
        const storedNum = localStorage.getItem("phoneNumber");
        inputNum.setAttribute("value", storedNum);
    }
      
    

}
//shoves name into local storage
function UpdateName(){
    var name = document.getElementById("accountName").value;
    var fixed = changeA(name);
    localStorage.setItem("name", fixed);
    
}
//changes a to fancy because of wonky jupiter font
function changeA(name){
    var fixed = name.replace(/a/g, "α");
    return fixed;

}


function UpdateNum(){
    var num = document.getElementById("phoneNumber").value;
    localStorage.setItem("phoneNumber", num);
}