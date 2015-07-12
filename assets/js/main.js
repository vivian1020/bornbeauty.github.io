$(document).ready(function() {
		
	$(function () {
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
				$("#backtotop").addClass("showme");
			}
			else
			{
				$("#backtotop").removeClass("showme");
			}
	});
		
	$("#backtotop").click(function(){
		$('body,html').animate({scrollTop:0},400);
			return false;
		});
	});

	
	$(document).pjax('.pjaxlink', '#pjax', {
	    fragment: "#pjax",
	    timeout: 10000
	  });
       
       $("li.select").click(function(){
		$("li.select").removeClass("active");
		$(this).addClass("active");
	});
       
      $(".circle").load(function(){
	    $(".circle").addClass("show");
	 });   	

 	$('.bookpiclist .bookpic').hover(
                    function() {
                        $(this).find('.booklabel').stop().animate({bottom: 0}, 200);
                        $(this).find('img').stop().animate({top: -30}, 500);
                    },
                    function() {
                        $(this).find('.booklabel').stop().animate({bottom: -40}, 200);
                        $(this).find('img').stop().animate({top: 0}, 300);
                    }
      );
      
	 
});
		
