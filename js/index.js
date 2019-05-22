
window.onscroll(p) = function() {myFunction()};

function myFunction() {
var a=document.body.scrollTop ;
var b=document.documentElement.scrollTop;
  if (a > 100 || b > 100) {
    document.getElementById("imag").className = "slideUp";
    a=0;
    b=0;
  }
  else
  document.getElementById("imag").className = "";
  
}


// $(window).on('load',function(){
    
     
//     $("#imag").fadeOut(-2000);
//     $("#imag").fadeIn(2000);
//     // $(".col2").hide();
//     // $(".col1").hide();
//     // $(".col3").hide();
//     // $(".col4").hide();
//   });