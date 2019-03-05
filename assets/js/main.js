$(document).ready(function() {
	$('.bxslider').bxSlider({
	  auto: true,
	  autoControls: true,
	  stopAutoOnClick: true,
	  pager: true

	});
	$(".menu-trigger").click(function() {
		$("#menu").fadeToggle(300);
		$(this).toggleClass("active")
	});
	
	$('.info-request, .get-contact').fancybox();
	
	$("select").crfs(); 
	
	
	$(".table td").mouseenter(function(){    
        $(this).find(".holder").stop(true, true).fadeIn(600);
        $(this).find(">div").addClass('hover');
        return false;
     });
      $('.table td').mouseleave(function(){  
        $(this).find(".holder").stop(true, true).fadeOut(400);
        $(this).find(">div").removeClass('hover');
        return false;
     });
	$(".table td .holder").click(function() {
        $(this).stop(true, true).fadeOut(400);
        $(this).parent().parent().removeClass('hover');
        return false;
	});
	
	var isBrowserOs = {
	    Windows: function() {
	        return navigator.userAgent.match(/Win/i);
	    },
	    MacOS: function() {
	        return navigator.userAgent.match(/Mac/i);
	    },
	    UNIX: function() {
	        return navigator.userAgent.match(/X11/i);
	    },
	    Linux: function() {
	        return navigator.userAgent.match(/Linux/i);
	    },
	    iOs: function() {
	        return navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
	    },
	    Android: function() {
	        return navigator.userAgent.match(/android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    Chrome: function() {
	        return window.chrome;
	    },
	    Firefox: function() {
	        return navigator.userAgent.match(/Firefox/i);
	    },
	    IE: function() {
	        return navigator.userAgent.match(/MSIE/i);
	    },
	    Opera: function() {
	        return (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0);
	    },
	    SeaMonkey: function() {
	        return navigator.userAgent.match(/SeaMonkey/i);
	    },
	    Camino: function() {
	        return navigator.userAgent.match(/Camino/i);
	    },
	    Safari: function() {
	        return (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0);
	    }
	};
	 
	var html_class = '';
	//OS
	if(isBrowserOs.Windows())
		html_class = 'win';
	if(isBrowserOs.UNIX())
		html_class = 'unix';
	if(isBrowserOs.MacOS())
		html_class = 'mac';
	if(isBrowserOs.Linux())
		html_class = 'linux';
	if(isBrowserOs.iOs())
		html_class = 'ios mac';
	if(isBrowserOs.Android())
		html_class = 'android';
	if(isBrowserOs.BlackBerry())
		html_class = 'blackberry';
	 
	//Browser
	if(isBrowserOs.Chrome())
		html_class = html_class + ' chrome';
	if(isBrowserOs.Firefox())
		html_class = html_class + ' firefox';
	if(isBrowserOs.IE())
		html_class = html_class + ' ie';
	if(isBrowserOs.Opera())
		html_class = html_class + ' opera';
	if(isBrowserOs.SeaMonkey())
		html_class = html_class + ' seamonkey';
	if(isBrowserOs.Camino())
		html_class = html_class + ' camino';
	if(isBrowserOs.Safari())
		html_class = html_class + ' safari';
	 
	$("html").addClass(html_class);
	 
});

(function ($) {
 "use strict";
  
	var $tabs = $('.nav-year li');
	var flagscroll=true;
	
	$(window).scroll(function(){
		var y = $(window).scrollTop();
		if(  y > 2000 && flagscroll==true ) {
			flagscroll=false;
			$('.home-count').each(function () {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
					}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		}
	});
	
	$('.about-count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
			}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	
	$(".events-list .row > div").slice(0, 8).show();
	$(".excursions-list .row > div").slice(0, 8).show();
	$(".teachers-list .row > div").slice(0, 8).show();
	$(".gallery-list .container > .row").slice(0, 4).show();
	$(".academics-content .container > .row").slice(0, 6).show();


	$("div").on("mouseleave", function(){	
	
		if ($(this).hasClass("events-single-location")) { 
			$('.events-single-location iframe').css("pointer-events", "none"); 
		}
		
		if ($(this).hasClass("excursions-single-location")) { 
			$('.excursions-single-location iframe').css("pointer-events", "none"); 
		}
		
	  
	});
	
	$("a,section,div,span,li,input[type='text'],input[type='button'],tr,button").on("click", function(){
		
		if ($(this).hasClass("events-single-location")) { 
			$('.events-single-location iframe').css("pointer-events", "auto");
		}
		
		if ($(this).hasClass("excursions-single-location")) { 
			$('.excursions-single-location iframe').css("pointer-events", "auto");
		}
		
		if ($(this).hasClass("yr-prev")) { 
			$tabs.filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
			return false;
		}
		
		if ($(this).hasClass("yr-next")) { 
			$tabs.filter('.active').next('li').find('a[data-toggle="tab"]').tab('show');
			return false;
		}
		
		if ($(this).hasClass("events-load-more")) { 
			$(".events-list .row > div:hidden").slice(0, 4).slideDown();
			if ($(".events-list .row > div:hidden").length == 0) {
				$(".events-load-more").fadeOut('slow');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top-600
			}, 1500);
		}
		
		if ($(this).hasClass("excursions-load-more")) { 
			$(".excursions-list .row > div:hidden").slice(0, 4).slideDown();
			if ($(".excursions-list .row > div:hidden").length == 0) {
				$(".excursions-load-more").fadeOut('slow');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top-600
			}, 1500);
		}
		
		if ($(this).hasClass("teachers-load-more")) { 
			$(".teachers-list .row > div:hidden").slice(0, 4).slideDown();
			if ($(".teachers-list .row > div:hidden").length == 0) {
				$(".teachers-load-more").fadeOut('slow');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top-600
			}, 1500);
		}
		
		if ($(this).hasClass("gallery-load-more")) { 
			$(".gallery-list .container > .row:hidden").slice(0, 1).slideDown();
			if ($(".gallery-list .container > .row:hidden").length == 0) {
				$(".gallery-load-more").fadeOut('slow');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top-200
			}, 1500);
		}
		
		if ($(this).hasClass("academics-load-more")) { 
			$(".academics-content .container > .row:hidden").slice(0, 6).slideDown();
			if ($(".academics-content .container > .row:hidden").length == 0) {
				$(".academics-load-more").fadeOut('slow');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top-1100
			}, 1500);
		}
		
		if ($(this).hasClass("closecanvas")) { 
			$("body").removeClass("offcanvas-stop-scrolling");
		}
		
		
	});
	
	

	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},2000);
	});

	  
	  
})(jQuery);

