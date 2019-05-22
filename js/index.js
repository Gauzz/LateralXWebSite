
// window.onscroll = function() {myFunction()};
// var a = 0;
// function myFunction() {
    
// var b=document.body.scrollTop ;
// // var b=document.documentElement.scrollTop;
//   if (b < a) {
//     document.getElementById("imag").className = "slideUp";
//    a=document.body.scrollTop ;
//   }
//   else
 
  
// }

var iScrollPos = 0;
$(window).scroll(function () {
   
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        document.getElementById("imag").className = "";
    } else {
        
        if($(this).scrollTop()>screen.height)
        // 
        document.getElementById("imag").className = "slideUp";

    }
    iScrollPos = iCurScrollPos;
    
});



// $(window).on('load',function(){
    
     
//     $("#imag").fadeOut(-2000);
//     $("#imag").fadeIn(2000);
//     // $(".col2").hide();
//     // $(".col1").hide();
//     // $(".col3").hide();
//     // $(".col4").hide();
//   });