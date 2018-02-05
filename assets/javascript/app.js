// $(document).ready(function(){

//   //if you wish to keep both the divs hidden by default then dont forget to hide //them           
//   $("#contactForm").hide();
      

//   $("#contactButton").click(function(){
//     $("#contactForm").show();
//   });

// });

$("#contactForm").hide();

$("#contactButton").on("click", function(event) {

  $("#contactForm").show();
  event.preventDefault()

});