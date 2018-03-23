$(function(){
	"use strict";
	var curr = 0;
	var go = 0;
	$("#jsNav a.trigger").each(function(i){
		$(this).click(function(){
			curr = i;
			$("#js img").eq(i).fadeIn(1500).siblings("img").fadeOut(1500);
			$(this).addClass("imgSelected").siblings().removeClass("imgSelected");
		});
	});
	
	
	var timer = setInterval(function(){
		go = (curr + 1) % 3;
		$("#jsNav a.trigger").eq(go).click();
	},5000);
	$("#js,#next,#prev").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
		go = (curr + 1) % 3;
		$("#jsNav a.trigger").eq(go).click();
	},5000);
	});
	
	$("#next").click(function(){
		
		if(curr === 2){
			go = 0;
		}else{
			go = (curr + 1) % 3;
		}
		$("#jsNav a.trigger").eq(go).click();
	});
	
	$("#prev").click(function(){
		
		if(curr === 0){
			go = 2;
		}else{
			go = (curr - 1) % 3;
		}
		$("#jsNav a.trigger").eq(go).click();
	});
});