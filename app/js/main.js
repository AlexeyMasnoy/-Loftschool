$(document).ready(function() {


	$("input[type='checkbox']").click(function() {
		$(this).parents(".course_item")
			.delay(1000)
			.append('<div class="shade"></div>')
			.css("box-shadow","0px 0px 0px #fff")
			.delay(1000)
			.fadeOut(300, function(){
                $(this).remove();

if ($('.course_item').length > 0)	{
		console.log($('.course_item').length)
    } 
    else {

	$('.course_items').append('<div class="course_complete"><h1>&#10003 Задание выполненно</h1></div>')
	
	}

});
	
	$(this).next()
	        .css('color', '#8cc34b');
               
    
		

});
	
	$('article.course_item h3').hover(function(){
		$(this).append('<div class="line"></div>')
				.css({"color": "#8cc34b",
					  "cursor": "pointer"});
	}, function() {
		$(this).css("color", "#727272")
			   .find(".line:last")
			   .remove();
	});
});