console.log('ready');

$('#calendar').datepicker({
	inline: true,
	firstDay: 0,
	showOtherMonths: true,
	dayNamesMin: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	autoSize: true

});

$(".container > a").hide();


var photo =[40118, 40218, 40318, 40418, 40518, 40618, 40718, 40818, 40918, 41018, 41118, 41218, 41318];

$(document).ready(function(){

//Add thumnail images in the today box	
	$(".ui-datepicker-today").addClass("slider")
	for( var i=0; i < photo.length ; i ++){
	$(".ui-datepicker-today").append(`<li><img id="thumbnail" src="image/${photo[i]}.jpeg"></li>`);
	}

// Auto Carousel for Thumbnail Image on Today box 
	setInterval(function() {
 		 $('.slider > li:first')
    		.fadeOut(1000)
    		.next()
    		.fadeIn(1000)
    		.end()
   			.appendTo('.slider');
	}, 2500);


//Activate Slideshow Container
	$(".slider").click(function(){
		window.scrollTo(0, 0);
		$("h2").hide();
		$(".container > a, button").show();

//Adding images in ther slideshow container
		for( var i=0; i < photo.length ; i ++){
		$(".slideshow").append(`<figure><img id="slideImage" src="image/${photo[i]}.jpeg"></figure>`);
		};

		//Show firest pages Main Container
		$(".slideshow figure:first-child").addClass("show");	
	});//end of slider click function


	var counter = 0; 
	var numItems=photo.length;
		console.log(numItems)
// this function is what cycles the slides, showing the next or previous slide and hiding all the others
	var showCurrent = function(){
			var itemToShow =  Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
			console.log(itemToShow);
			// remove .show from whichever element currently has it
			$(".slideshow figure").removeClass('show'); 
			$(".slideshow figure").eq(counter).addClass('show');    
		};//end of showCurrent function

// add click events to prev & next buttons 

	$('.next').on('click', function(){
		counter+=1;
		//Reload first page when it meet last image
		if(counter == numItems){
			counter = 0
			showCurrent();
		}else{
			showCurrent(); 
		};
	});// end of next function

	$('.prev').on('click', function(){
	    counter-=1;
	    console.log(counter);
	    //Reload first page when it meet last image
	    if(counter == -numItems){
	    	counter = 0
	    	showCurrent();
	    }else{
	    showCurrent(); 
		}; 
	});// end of prev function

//Auto slideshow
	$(".play").click(function(){
		var timer = null;
		timer = setInterval(function() {
			$('.next').trigger('click');
			}, 2500);
		$(".pause").click(function(){
			clearInterval(timer);
			timer=null;
		});
		

	});
	$(".stop").click(function(){
			window.location.reload(true);
			/*return;
			console.log(timer);
			counter = 0;
			showCurrent();*/
		});


});//end of Document Ready
