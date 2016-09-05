document.addEventListener("DOMContentLoaded", function(){
    var menu_hidden = document.querySelectorAll(".hidden");
    var button = document.querySelector(".click");
//        console.log(menu_hidden, button);
    
    button.addEventListener("mousemove", function(e){
        menu_hidden.classList.add("visible");
        console.log("ok");
       
    });
    
});