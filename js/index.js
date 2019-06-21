// window.onscroll = function() {myFunction()};
// var a = 0;
// function myFunction() {
    
// // var b=document.body.scrollTop ;

// var b=document.documentElement.scrollTop;
// console.log(b);
//   if (b < a) {
//     document.getElementById("imag").className = "slideUp";
//    a=document.body.scrollTop ;
//   }
  
 
  
// }


document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
  if(document.querySelector('#nav-toggle').classList.contains("active")== true)
{
  document.querySelector('#nav-toggle').style.color="black";
}

else{
  document.querySelector('#nav-toggle').style.color="white";
}
 

  var windowsize = $(window).width;
  if(windowsize>=1000){
  $('.menubut').attr('width','9%');
  }
  
if($('#nav-toggle').hasClass('active')){
   $('.menu').eq(0).fadeIn("fast");   
   $('body').css('hidden','auto');
   $('.cover').fadeOut("fast");
   $('.create').fadeOut("fast");
  var windowsize = $(window).width();
  
  if(windowsize<=425){
   $('.searc2').fadeOut("fast");
  }
  
   $('.next').fadeOut("fast");
   }
else{
 
  $('.menu').eq(0).fadeOut("fast");
  $('.cover').fadeIn("fast");
  $('.brands').fadeIn("fast");
  var windowsize = $(window).width();
  if(windowsize<=425){
  $('.searc2').fadeIn("fast");
  }
  if(window.location.href != "https://www.lateralx.com/about")
  $('.create').fadeIn("fast");
  $('.next').fadeIn("fast");
  $('body').css('overflow','auto');
  }    

}        
);

var i=0;
console.log(window.innerWidth);

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            if(i<2)
              $(this).text(Math.ceil(now));
              if(now==78)
              {
                i++;
              }
          }
      });
  });
  
  }
}



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


$('.menu').eq(0).singlePageNav({
  offset: $('.single-page-nav').outerHeight(),
  threshold: 120,
  speed: 800,
  currentClass: 'current',
  easing: 'swing',
  filter: ':not(.external)',
  //up: <a href="https://www.jqueryscript.net/time-clock/">date</a>,
  Hash: true,
  beforeStart: function() {
  console.log('begin scrolling');
  },
  onComplete: function() {
  console.log('done scrolling');
  }
  });


  $(".menubut").click(function()
  {
    $('.menu').eq(0).fadeOut();
  });

  





$(window).on('load',function(){
    
     
    // $("#imag").fadeOut(-3000);
    
    // $("#imag").hide();
    // // $("#imag").fadeIn(2000);
    // $("#imag").show();
    // $(".col1").hide();
    // $(".col3").hide();
    // $(".col4").hide();
  });

  function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(22.756748,75.902977),
      zoom:20,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({position: center});

    marker.setMap(map);
    }

    function facebook(){
        window.open("https://www.facebook.com/LateralX");
      }
      function twitter(){
        window.open("https://twitter.com/LateralX_");
      }
      function instagram(){
        window.open("https://www.instagram.com/LateralX_/");
      }
      function linkedin(){
        window.open("https://www.linkedin.com/company/lateralx/about/");
      }


      
