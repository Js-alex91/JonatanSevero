$(document).ready(function(){
$("body").mousemove(function(event){
	$('.cursor').show(50);
	let x = event.pageX - this.offsetLeft - 10;
	let y = event.pageY - this.offsetTop - 15;
    $('.cursor').css({left:x,top:y});		
});
$('.nav__toggle').click(function(e){
	e.preventDefault();
});

$('.bg').hover(function(){
		$('.cursor').addClass('cgreen');
},function(){
		$('.cursor').removeClass('cgreen');
});

$(".menu-icon").on("click", function(){
    	$(this).toggleClass("open");
    	
    	$("nav ul li").toggleClass("animate");
    	$('.menu').css('visibility','visible');
  });
});	

