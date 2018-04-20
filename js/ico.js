var initmain = function(){

	// particles
	particlesJS("particles", {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.39457459926017263,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2.6373626373626373,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 11.837237977805179,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 11.048088779284832,
      "direction": "top",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 1104.8088779284833,
        "rotateY": 631.3193588162762
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
	

	




	// setup page animations on scroll
/*
	wow = new WOW({
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true,       // default
		callback:     function(box) {
			// Start countup when area reached
			if(!citizenships.error && $(box).hasClass('figures')) {
				citizenships.start();
				companies.start();
				offices.start();
			}
		}
	});
*/

	// product icons
	$("#products a.eres").hover(function(){
		$(this).find("img").attr("src","images/icon-eres-animated.svg");
	})
	$("#products a.eres").mouseout(function(){
		$(this).find("img").attr("src","images/icon-eres.svg");
	})
	$("#products a.pass").hover(function(){
		$(this).find("img").attr("src","images/icon-pass-animated.svg");
	})
	$("#products a.pass").mouseout(function(){
		$(this).find("img").attr("src","images/icon-pass.svg");
	})
	$("#products a.comp").hover(function(){
		$(this).find("img").attr("src","images/icon-comp-animated.svg");
	})
	$("#products a.comp").mouseout(function(){
		$(this).find("img").attr("src","images/icon-comp.svg");
	})
	$("#products a.car").hover(function(){
		$(this).find("img").attr("src","images/icon-car-animated.svg");
	})
	$("#products a.car").mouseout(function(){
		$(this).find("img").attr("src","images/icon-car.svg");
	})
}

$(document).ready(function(){
	initmain();
	//wow.init();
	$("#mce-AMOUNT, #mce-COUNTRY").select2();

	$(window).on('resize', function(){
		if ( $(window).width() < 992 ) {
		}
	});
});
