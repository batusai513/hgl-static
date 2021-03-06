/* jshint ignore:start */

var Main = (function(window, $){

	function init(){

    $('.js-next').on('click', function(e){
      e.preventDefault;
      var $this = $(this),
      ref = $this.attr('href'),
      $el = $(ref);

      $el.velocity('scroll', { duration: 350, easing: "easeInOut", offset: -80 })
    });

    if($('.js-navigation').length > 0){
      var sticky = new Waypoint.Sticky({
        element: $('.js-navigation')[0]
      });
    }


    $.extend($.validator.messages, {
        required: "Este campo es requerido.",
        remote: "Please fix this field.",
        email: "Por favor ingrese una direccion de correo valida.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: $.validator.format("Please enter no more than {0} characters."),
        minlength: $.validator.format("Please enter at least {0} characters."),
        rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
        range: $.validator.format("Please enter a value between {0} and {1}."),
        max: $.validator.format("Please enter a value less than or equal to {0}."),
        min: $.validator.format("Please enter a value greater than or equal to {0}.")
    });


  	$('.js-quotes').flexslider({
  		controlNav: false
  	});

    $('.js-main-slider').flexslider({
      directionNav: false,
      animation: "fade"
    })

    $('.js-contact-form').each(function(){
      $(this).validate({
        errorClass: 'has-error',
        validClass: 'has-success',
        highlight: function(el, errorClass, validClass){
          $(el).parents('.form-group').addClass(errorClass, validClass);
        },
        unhighlight: function(el, errorClass, validClass){
          $(el).parents('.form-group').removeClass(errorClass, validClass);
        },
        errorPlacement: function(error, element){
          error.addClass('form-error-text').appendTo(element.closest('.form-group'));
        }
      });
    });

    $('.js-menu-link').on('click', function(e){
      e.preventDefault();
      var $this = $(this),
          $href = $this.attr('href');
      $($href).toggle();
    });
	}

	return{
		init: init
	}

}(window, jQuery));

$(function(){
  var map = HGLMapFactory('#map-canvas');
	Main.init();
});

/* jshint ignore:end */
