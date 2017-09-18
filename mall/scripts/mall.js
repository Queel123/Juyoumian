$(document).ready(function(){
	if($("#create").length>0){	$("#scrollBar2").hide();$("#scrollBar3").hide();}else{}
	if($("#picture").length>0){	$("#scrollBar3").hide();$("#scrollBar1").hide();}else{}	
	if($("#music").length>0){	$("#scrollBar1").hide();$("#scrollBar2").hide();}else{}
	
	$("#close").hide();
	$("#createText").mouseover(function(){
		$("#scrollBar1").fadeIn();
		$("#scrollBar2").fadeOut();
		$("#scrollBar3").fadeOut();		
	});
	$("#createText").mouseout(function(){
		$("#scrollBar1").fadeOut();
	});
	$("#pictureText").mouseover(function(){
		$("#scrollBar2").fadeIn();
		$("#scrollBar1").fadeOut();
		$("#scrollBar3").fadeOut();
	});
	$("#pictureText").mouseout(function(){
		$("#scrollBar2").fadeOut();
	});
	$("#musicText").mouseover(function(){
		$("#scrollBar3").fadeIn();
		$("#scrollBar1").fadeOut();
		$("#scrollBar2").fadeOut();
	});
	$("#musicText").mouseout(function(){
		$("#scrollBar3").fadeOut();
	});
});
$(function(){

　　var screenwidth,screenheight,mytop,getPosLeft,getPosTop

　　screenwidth = $(window).width();

　　screenheight = $(window).height();

	boxwidth = $("#box").width();

	boxheight = $("#box").height();

　　//获取滚动条距顶部的偏移

　　mytop = $(document).scrollTop();

　　//计算弹出层的left

　　getPosLeft = (screenwidth - boxwidth)/2;

　　//计算弹出层的top

　　getPosTop = (screenheight - boxheight)/2;

　　//css定位弹出层

　　$("#box").css({"left":getPosLeft,"top":getPosTop+mytop});

　　//当浏览器窗口大小改变时...

　　$(window).resize(function() {

　　	screenwidth = $(window).width();

　　	screenheight = $(window).height();

　　	mytop = $(document).scrollTop();

　　	getPosLeft = (screenwidth - boxwidth)/2;

　		getPosTop = (screenheight - boxheight)/2;

　　	$("#box").css({"left":getPosLeft,"top":getPosTop+mytop});
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

　　	$("#box").css({"left":getPosLeft,"top":getPosTop+mytop});
　　	$("#greybackground").css({"top":mytop});
　　	$("#close").css({"top":mytop});
　　});

　　//点击链接弹出窗口

　　$(".createImg").click(function() {
		var v_id = $(this).attr('src');
		//追加显示图片层
		$("body").append("<div id=box><img src="+v_id+" id=\"boxImg\" alt=\"来人抱枕\"/></div>");

　　	//获取滚动条距顶部的偏移
		
		mytop = $(document).scrollTop();

	　	boxwidth = $("#box").width();

		boxheight = $("#box").height();
		//计算弹出层的left

		getPosLeft = (screenwidth - boxwidth)/2;

		//计算弹出层的top

		getPosTop = (screenheight - boxheight)/2;

		//css定位弹出层

		$("#box").css({"left":getPosLeft,"top":getPosTop+mytop});
	　	//追加一个层，使背景变灰

　　	$("body").append("<div id=greybackground></div>");	//在body后添加一个层

　　	$("#greybackground").css({"width":screenwidth,"background-color":"#282c35","height":screenheight,"opacity":0.5,"z-index":3,"top":mytop});		//不透明度:0.5
		$("#close").fadeIn();　		
		return false;

　　});

　　//点击关闭按钮

　　$("#close").click(function() {

　　	$("#box").remove();

　　//删除变灰的层

　　	$("#greybackground").remove();
		$("#close").hide();
　　	return false;

　　});

})

