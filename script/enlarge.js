function enlarge(obj) {
	console.log($(obj).attr("src"))//get src
	$('#divimg').fadeIn(200);// mask layer fade in
	$('#divimg img').attr('src', $(obj).attr("src"));//replace src
	$('#divimg img').css("margin-top", "-" + $('#divimg img').height() / 2 + "px")// show the pic with style
}
function fadeout(obj) {
	$('#divimg').fadeOut(200);// mask layer fade out
	$('#divimg img').attr('src', "");// delete src to close the picture
}
