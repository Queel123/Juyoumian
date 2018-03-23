$(document).ready(function(){
　　var screenwidth,screenheight,footheight,headheight,realheight;
　　screenwidth = $(window).width();
　　screenheight = $(window).height();
	footheight = $("#footer").height();
	headheight = $("#header").height();
	realheight = screenheight - headheight;
	multiple = screenwidth / 1440;	
	if(realheight>702*multiple)
	{
		realheight=702*multiple;	
	}
	$("#background").css({"width":screenwidth,"height":realheight});
	$("#background").css({"background-size":screenwidth})	

	$("#icon1").css({"top":226*multiple,"left":372*multiple});
	$("#icon2").css({"top":429*multiple,"left":60*multiple});
	$("#icon3").css({"top":250*multiple,"left":573*multiple});
	$("#icon4").css({"top":191*multiple,"left":810*multiple});
	$("#icon5").css({"top":116*multiple,"left":1088*multiple});
	$("#icon6").css({"top":108*multiple,"left":1235*multiple});
	$("#icon7").css({"top":345*multiple,"left":1034*multiple});
	$("#close").hide();	
	$("#game").hide();
	$("#rule").hide();
});
$(function(){

　　var screenwidth,screenheight,mytop,getPosLeft,getPosTop

　　screenwidth = $(window).width();

　　screenheight = $(window).height();

	boxwidth = $("#rule").width();

	boxheight = $("#rule").height();

　　//获取滚动条距顶部的偏移

　　mytop = $(document).scrollTop();

　　//计算弹出层的left
　　getPosTop = (screenheight - boxheight)/2;

　　//计算弹出层的top
　　getPosLeft = (screenwidth - boxwidth)/2;

　　//css定位弹出层
　　$("#rule").css({"left":getPosLeft,"top":getPosTop+mytop});

　　//当浏览器窗口大小改变时...

　　$(window).resize(function() {

　　	screenwidth = $(window).width();

　　	screenheight = $(window).height();

　　	mytop = $(document).scrollTop();


　　	$("#rule").css({"left":getPosLeft,"top":getPosTop+mytop});
　　	$("#greybackground").css({"width":screenwidth,"height":screenheight,"top":mytop});
　　	$("#close").css({"top":mytop});
　　});

　　//当拉动滚动条时...

　　$(window).scroll(function() {

　　	screenwidth = $(window).width();

　　	screenheight = $(window).height();

　　	mytop = $(document).scrollTop();

　　	getPosLeft = (screenwidth - boxwidth)/2;

　　	getPosTop = (screenheight - boxheight)/2;
　　	$("#rule").css({"left":getPosLeft,"top":getPosTop+mytop});
		$("#game").css({"left":getPosLeft,"top":getPosTop+mytop});
　　	$("#greybackground").css({"top":mytop});
　　	$("#close").css({"top":mytop});
　　});

　　//点击链接弹出窗口

　　$(".iconfuck").click(function() {
　　	//获取滚动条距顶部的偏移
		
		mytop = $(document).scrollTop();

		//计算弹出层的left
	　	boxwidth = $("#rule").width();

		boxheight = $("#rule").height();
		//计算弹出层的top
		getPosLeft = (screenwidth - boxwidth)/2;
		getPosTop = (screenheight - boxheight)/2;
		//css定位弹出层
		$("#rule").css({"left":getPosLeft,"top":getPosTop+mytop});
	　	//追加一个层，使背景变灰

　　	$("body").append("<div id=greybackground></div>");	//在body后添加一个层

　　	$("#greybackground").css({"width":screenwidth,"background-color":"#282c35","height":screenheight,"opacity":0.5,"z-index":3,"top":mytop});		//不透明度:0.5
		$("#rule").fadeIn();　	
		$("#close").fadeIn();　		
		return false;

　　});

　　//点击关闭按钮

　　$("#close").click(function() {


　　//删除变灰的层
　　	$("#greybackground").remove();
		$("#close").hide();
		$("#game").hide();
		$("#rule").hide();
　　	return false;

　　});

})
