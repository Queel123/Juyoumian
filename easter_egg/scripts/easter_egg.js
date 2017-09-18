$(document).ready(function(){
　　var screenwidth,screenheight,footheight,headheight,realheight;
　　screenwidth = $(window).width();
　　screenheight = $(window).height();
	footheight = $("#footer").height();
	headheight = $("#header").height();
	multiple = screenwidth / 1440;	
	realheight = multiple * 820;
	$("#background").css({"width":screenwidth,"height":realheight});
	$("#background").css({"background-size":screenwidth});
	$("#icon1").css({"top":182*multiple,"left":715*multiple});
	$("#icon2").css({"top":394*multiple,"left":439*multiple});
	$("#icon3").css({"top":569*multiple,"left":642*multiple});
	$("#icon4").css({"top":251*multiple,"left":830*multiple});
	$("#icon5").css({"top":211*multiple,"left":992*multiple});
	$("#icon6").css({"top":361*multiple,"left":949*multiple});
});
