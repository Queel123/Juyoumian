//在文档加载时遍历某个块的所有元素
$(document).ready(function(){
	verticalCenter("locationSelect","cities");
	verticalCenter("locationSelect","districts");
});
$(function(){
	$(".contentStar").click(function() {
		if($(this).attr('src')=="images/Favourite.png") {
			$(this).attr('src',"images/Star.png");
		}
		else {
			$(this).attr('src',"images/Favourite.png");
		}
	});
});
