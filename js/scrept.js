window.onscroll = ()=>
{
   if(this.scrollY > 60 )
   {
       $(".d-btn .btn").css({
       
           "right" : "18px",           
           "transition" : ".3s",

       }),
       $(".navbar-default").css({
           "background-color" : "black",
           "z-index" : "2",
           "opacity": ".9;" 
        })
    }
    else 
   {
    $(".navbar-default").css({
        "background-color" : "#eee",
        "z-index" : "2",
        "opacity": ".9;" 
     })
       $(".d-btn .btn").css({      
           "right" : "-50px",
           "transition" : ".3s",

       })
     
   }
  
  
}
$("ul li a").click(function(){
   $('html , body').animate({
     scrollTop: $('#' + $(this).data('value')).offset().top

   },1000)
})
$(".d-btn .btn").click(function(){
   window.scrollTo({
     top:0,
     behavior:"smooth"
   })
})

  $(".all").click(function(){
      $(".a1").fadeIn(1000);
      $(".squ1").addClass("t1");
      $(" .squ2 , .squ3, .squ4").removeClass("t1");
  })


  $(".fas").click(function(){
    $(".squ2").addClass("t1");
    $(" .squ1 , .squ3, .squ4").removeClass("t1");
      $(".bac1,.bac5,.bac10,.bac11").fadeIn(1000);
      $(".bac2,.bac3,.bac4,.bac6,.bac7,.bac8,.bac9,.bac12").fadeOut(1000);
  })



  $(".event").click(function(){
      $(".squ3").addClass("t1");
      $(" .squ2 , .squ1, .squ4").removeClass("t1");
      $(".bac2,.bac6,.bac12,.bac7").fadeIn(1000);
      $(".bac1,.bac3,.bac4,.bac5,.bac8,.bac9,.bac10,.bac11").fadeOut(1000);
  })


  $(".wed").click(function(){
    $(".squ4").addClass("t1");
    $(" .squ2 , .squ3, .squ1").removeClass("t1");
      $(".bac3,.bac8,.bac2,.bac5").fadeIn(1000);
      $(".bac1,.bac6,.bac4,.bac7,.bac9,.bac12,.bac10,.bac11").fadeOut(1000);
  })
  
$(".pl1").addClass("plactive");


  $(".pl1").click( ()=>{      
       $(".pl1").addClass("plactive"),
       $(".pl2 , .pl3").removeClass("plactive");
       $(".two , .three").fadeOut();
       $(".one").fadeIn(2000);
     
     
  })
  $(".pl2").click( ()=>{
    $(".pl2").addClass("plactive");
    $(".pl1 , .pl3").removeClass("plactive"), 
       $(".one , .three").fadeOut();
       $(".two").fadeIn(2000);
  })

  $(".pl3").click( ()=>{
      
    $(".pl3").addClass("plactive");
    $(".pl2 , .pl1").removeClass("plactive");    
       $(".two , .one").fadeOut();
       $(".three").fadeIn(2000);
  })
  let y =0, x = 0 ,z=0;
  $(".progr .fa1").click( ()=>{
     if(y == 0 )
     {
        $(".child1").slideDown(500);
        $(".child1").fadeIn();
       y =1;
     }
     else if(y == 1 )
     {
        $(".child1").slideUp(500);
        $(".child1").fadeOut();
       y =0;
     }
     
     
    
    })
  $(".progr .fa2").click( ()=>{
     if(x == 0 )
     {
        $(".child2").slideDown(500);
        $(".child2").fadeIn();
       x =1;
     }
     else if(x == 1 )
     {
        $(".child2").slideUp(500);
        $(".child2").fadeOut();
       x =0;
     }
     
     
    
    })
  $(".progr .fa3").click( ()=>{
     if(z == 0 )
     {
        $(".child3").slideDown(500);
        $(".child3").fadeIn();
       z =1;
     }
     else if(z == 1 )
     {
        $(".child3").slideUp(500);
        $(".child3").fadeOut();
       z =0;
     }
     
     
    
    })