	AOS.init({
				easing: 'ease-out-back',
				duration: 1000
			});
jQuery('.hero__scroll').on('click', function(e) {
				jQuery('html, body').animate({
					scrollTop: jQuery(window).height()
				}, 1200);
			});
jQuery(function() {
    jQuery(window).on("scroll", function() {
        if(jQuery(window).scrollTop() > 50) {
            jQuery("#main-header").addClass("fixed-header");
        } else {           
           jQuery("#main-header").removeClass("fixed-header");
        }
    });
});

 jQuery(window).on('scroll',function(){
 
     if (jQuery(window).scrollTop() > 50) {
         jQuery('#main-header').css({
             'background:' : 'rgba(0,0,0,0.7)'
         });
     } else {
         jQuery('#main-header').css({
             'background:' : '#28274b'
         });
     }
 });
 

jQuery(document).ready(function(){
	jQuery('#nav-icon4').click(function(){
      
		jQuery('#nav-icon4').toggleClass('open');
        jQuery('.mobilenav').toggleClass('shownav');
        jQuery('.logobg').toggleClass('logobgcolor');
          if(jQuery('.mobilenav').is(':visible'))
 {
    jQuery('body').addClass("fixedPosition");
 }
 else
 {
    jQuery('body').removeClass("fixedPosition");
 }       
	});
		
	
		
	});	

	
function osFunction() {
    document.getElementById("ServicesDropdown").classList.toggle("show");
}
	
function wdFunction() {
    document.getElementById("WebDropdown").classList.toggle("show");
}	
	
function uxFunction() {
    document.getElementById("UxDropdown").classList.toggle("show");
}
	
function ddFunction() {
    document.getElementById("DigitalDropdown").classList.toggle("show");
}	

function bdFunction() {
    document.getElementById("BrandDropdown").classList.toggle("show");
}

 
/** Home page testimonial slider **/

         jQuery(document).ready(function() {
              jQuery('#testial').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
				navText : false,
				dots:true,
				autoHeight : true,
                responsive: {
                  0: {
                    items: 1,
                    nav: false
                  },
                  600: {
                    items: 1,
                    nav: false
                  },
                  1000: {
                    items: 1,
                    nav: false,					
                    loop: false,
                    margin: 20
                  }
                }
              })
              
              jQuery('#serwork').owlCarousel({
                loop: true,
                margin: 10,
                navText:true,
                responsiveClass: true,
				dots:false,
				autoHeight : false,
				slideSpeed :10,
				smartspeed:10,
				navText: ['<img src="https://tsg.b-cdn.net/prearrow.png">','<img src="https://tsg.b-cdn.net/nexarrow.png">'],
                responsive: {
                  0: {
                    items: 1,
                    nav:true
                  },
                  600: {
                    items: 1,
                    nav:true
                  },
                  1000: {
                    items: 1,
                    nav:true,
                    loop: false,
                    margin: 20
                  }
                }
              })
            })
 
 
 jQuery(window).load(function () {
    jQuery(".pp-pic").click(function(){
       
       var videoid=jQuery(this).attr('data-video');
       jQuery('.pop .cv p').append('<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/'+videoid+'?color=ffffff&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>');
jQuery('.pop').show();


    });
    jQuery('.pop').click(function(){
        jQuery('.pop').hide();
         jQuery('.pop .cv p').empty();
    });
    jQuery('.end').click(function(){
        jQuery('.pop').hide();
    });
});           
            