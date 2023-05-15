$(document).ready(function() {
	//console.log("ready!");

		$(".btn").click(function(event) {
    // Removes focus of the button.
    $(this).blur();
  });

		 $('#cartlist').hide();
   		 $('.estimate').hide();
   		 


    var badge = 0;

    $('#add').click(function (){
      $('.estimate').show();
        badge ++;
        $('.badge').html(badge).css('display', 'block');
        $("tr#cartlist:first").clone().appendTo("tbody#cart").show(300);   
  
    }); 

   
    $(document).on('click', '#remove', function () {
      $(this).closest('tr').remove();
      badge --;
      $('.badge').html(badge).css('display', 'block');
      if (badge < 1) {
        $('.estimate').hide();
        $('.badge').html(badge).css('display', 'none');
      }
    });


		$('#size,#extra').hide();

		$("#category").change(function () {
     if($("#category").val()=='pizza'){
	    $("#size,#extra").css("display", "block");
		} 
	else {
		 $("#size,#extra").css("display", "none");
   }
   });

    
  $(".navbar-nav li a[href^='#'],#snav li a[href^='#']").on('click', function(e) {
     // prevent default anchor click behavior
     e.preventDefault();

     var hash = this.hash;

     $('html, body').animate({
         scrollTop: $(this.hash).offset().top
                    }, 500, function(){

         window.location.hash = hash;
       });

  });




 });