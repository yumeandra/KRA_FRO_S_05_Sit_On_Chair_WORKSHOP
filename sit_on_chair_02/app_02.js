
document.addEventListener("DOMContentLoaded", function(){
var slideNumber = 0;
var slides = document.querySelectorAll(".mySlides");
    
var right = document.querySelector(".fa-chevron-right");
   
var left = document.querySelector(".fa-chevron-left");
    

    left.addEventListener("click", function(){
        slideNumber--; //zmniejszamy licznik o 1, bo klikamy lewy przycisk
        var slideOrder= slideNumber % slides.length; 
        if (slideOrder<0) {
            slideOrder +=slides.length; 
        }
        slides[slideOrder].classList.remove("display_none"); //usuwamy klasę ukrytą dla elementu, kóry ma być wyswietlony
        for (var i=0; i<slides.length; i++) { //a teraz dodajemy ją za pomocą pętli dla pozostałych elementów slidera, które mają być ukryte
            if (i != slideOrder) {
            slides[i].classList.add("display_none");
            }
            
        }
        
    });
    
    right.addEventListener("click", function(){
        slideNumber++;
        var slideOrder = slideNumber % slides.length;
        
        slides[slideOrder].classList.remove("display_none");
        for(var i= 0; i< slides.length; i++) {
            if(i != slideOrder) {
                slides[i].classList.add("display_none");
            }
                
            
        }
    });
    
    
});


   


