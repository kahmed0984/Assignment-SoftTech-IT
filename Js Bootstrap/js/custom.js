(function($){
	$(document).ready(function(){
		$(' .jquery_box h4').click(function(){
			$(this).siblings('p').slideToggle();
			// $('.jquery_box h4').hide();
		});
		$('.jquery_box h4 span').click(function(){
			$(this).closest('.jquery_box').hide();
		});
		$('.modal_box  a').click(function(){
			$('.modal_container').css({
				'display' :'block'
			});
		});
		$('.modal_content_close').click(function(){
			$('.modal_container').hide();
		});
	});
})(jQuery);
























// // use javascript
// var arrayName = document.getElementsByClassName('js_heading').length;
// for(var i = 0; i < arrayName; i++){
// 	document.getElementsByClassName('js_heading')[i].onclick = function(){
// 		var arrayName2 = document.getElementsByClassName('js_contant').length;
// 		for(var i = 0; i < arrayName2; i++){
// 			document.getElementsByClassName('js_contant')[i].style.display = 'none';
// 		}
// 	}
// }



// // document.getElementById('js_contant_id').style.display = 'block';
// document.getElementsByTagName('h5')[1].onclick = function(){
// 	var presentDisplay = document.getElementById('js_contant_id').style.display;
// 	if( presentDisplay === 'none'){
// 		document.getElementById('js_contant_id').style.display = 'block';
// 	}
// 	else{
// 		document.getElementById('js_contant_id').style.display = 'none';
// 	}
// }

