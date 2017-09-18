//调整某个元素使之在div块垂直居中，参数分别为块id及元素id
function verticalCenter(div_id, element_id) {
	var div_height = $("#"+div_id).height(); // 获得的是该div本身的高度, (不包含padding,margin,border)
	var element_height = $("#"+element_id).height();
	var height = (div_height-element_height)/2 + "px";
	$("#"+element_id).css({
		"margin-top": height 
	});
}
//在文档加载时遍历某个块的所有元素 使该块的所有元素在里面垂直居中
//这里手动遍历了一下 遍历还没有写
$(document).ready(function(){
	verticalCenter("headerContent","navUser");
	verticalCenter("headerContent","navShop");

});
