// use javascript
var arrayName = document.getElementsByClassName('js_heading').length;
for(var i = 0; i < arrayName; i++){
	document.getElementsByClassName('js_heading')[i].onclick = function(){
		var arrayName2 = document.getElementsByClassName('js_contant').length;
		for(var i = 0; i < arrayName2; i++){
			document.getElementsByClassName('js_contant')[i].style.display = 'none';
		}
	}
}



// document.getElementById('js_contant_id').style.display = 'block';
document.getElementsByTagName('h5')[1].onclick = function(){
	var presentDisplay = document.getElementById('js_contant_id').style.display;
	if( presentDisplay === 'none'){
		document.getElementById('js_contant_id').style.display = 'block';
	}
	else{
		document.getElementById('js_contant_id').style.display = 'none';
	}
}








// use jquery
$(document).ready(function(){



	$(' .box1 h5').click(function(){
		$('.box1 p, .box1 img').hide();
	});
	$(' .box2 h5').click(function(){
		$('.box2 p, .box2 img').show();
	});
	$(' .box3 h5').click(function(){
		$('.box3 p, .box3 img').toggle();
	});
	$(' .box4 h5').click(function(){
		$('.box4 p, .box4 img').slideUp(1000);
	});
	$(' .box5 h5').click(function(){
		$('.box5 p, .box5 img').slideDown(1000);
	});
	$(' .box6 h5').click(function(){
		$('.box6 p, .box6 img').slideToggle(1000);
	});
	$(' .box7 h5').click(function(){
		$('.box7 p, .box7 img').fadeIn(1000);
	});
	$(' .box8 h5').click(function(){
		$('.box8 p, .box8 img').fadeOut(1000);
	});
	$(' .box9 h5').click(function(){
		$('.box9 p, .box9 img').fadeToggle(2000);
	});



});
