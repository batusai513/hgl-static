/* jshint ignore:start */
var HGLMapFactory = (function map(window, $){
  var mapStyles =[
    {
    stylers: [
      { saturation: "-100" },
      { lightness: "20" }
    ]
    },{
    featureType: "poi",
    stylers: [
      { visibility: "off" }
    ]
    },{
    featureType: "transit",
    stylers: [
      { visibility: "off" }
    ]
    },{
    featureType: "road",
    stylers: [
      { lightness: "50" },
      { visibility: "on" }
    ]
    },{
    featureType: "landscape",
    stylers: [
      { lightness: "50" }
    ]
    }
  ];
    var canvas = null,
        map = null,
        marker = null,
        mapOptions = {
          zoom: 16,
          center:  new google.maps.LatLng(10.999645,-74.8166729),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true
        }
    function init(cv){
	    $canvas = $(cv);
	    if($canvas.length !==0){
	      map = new google.maps.Map($canvas[0], mapOptions);
	      marker = new google.maps.Marker({
	        position: new google.maps.LatLng(10.999645,-74.8166729),
	        map: map
	      });
	      map.setOptions({
	          styles: mapStyles
	      });
	    }
    }

    return init;
})(window, jQuery);

/* jshint ignore:end */