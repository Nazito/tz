$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};

	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	if($("#slider2").length) {
		var owl = $("#slider2");

		owl.owlCarousel({
		  items: 1,
		  margin: 10,
		  loop: true,
		  nav: true,
		  pagination : true,
		  navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		});
	};

	if($("#slider1").length) {
		var owl = $("#slider1");

		owl.owlCarousel({
		  items: 1,
		  margin: 10,
		  loop: true,
		  nav: false,
		  pagination : true,
		  animateOut: 'fadeOut',
		  navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		  responsive:{
				0:{
					nav:true
				},
			
				1110:{
					nav: false
				}
			}
			
		});
	};
	

	
});


$(function(){

	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
		bl_top = $(target).offset().top - 70;
		$('body, html').animate({scrollTop: bl_top}, 1000);
		return false
	});
});


	

	

$('.HEAD__container_headline_touch-menu, .HEAD__container_headline_touch-menu_dropdown_list_link').click(function () {
	$('.HEAD__container_headline_touch-menu').toggleClass('active')
	$('.HEAD__container_headline_touch-menu_dropdown').toggleClass('toggle')	
})

$(window).scroll(function(){
	var st = $(this).scrollTop();

	$(".web .HEAD_content_translate-left").css({
		"transform" : "translateX(" + st/5 + "%)"
    });

    $(".web .HEAD_content_bottom-container_btn").css({
		"transform" : "translateX(" + -st*2 + "%)"
    });


    $(".web .HEAD_content_translate-right").css({
		"transform" : "translateY(" + st/2 + "%)"
	});
    
	
    
	$(".web .HEAD_content_bottom-container_img").css({
		"transform" : "translate(0%," + -st/6 + "%"
	});

});

$( ".FEATURE-WORKS_container_img" ).mousemove(function(event){
	const halfHeight = this.offsetHeight / 2;
	this.style.transform = 'rotateX('+ -(event.offsetY - halfHeight)/5 +'deg) rotateY('+ (event.offsetX - halfHeight)/5 + 'deg)';
});

$( ".FEATURE-WORKS_container_img" ).mouseout(function(event){
	this.style.transform = 'rotate(0)';
});


$('.OUR-SERVICES_container_item_description_open').click(function(){
	var myIndex = ($(this).index('.OUR-SERVICES_container_item_description_open'));
	$(this).parent(".OUR-SERVICES_container_item_cover").toggleClass('open');
	$('.OUR-SERVICES_container_item_description').eq(myIndex).toggleClass('exit');
})

$('.OUR-SERVICES_container_item_description_exit').click(function(){
	var myIndex = ($(this).index('.OUR-SERVICES_container_item_description_exit'));
	$(this).parent(".OUR-SERVICES_container_item_description").toggleClass('exit')
	$('.OUR-SERVICES_container_item_cover').eq(myIndex).toggleClass('open')
})






var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



