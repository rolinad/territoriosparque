$("#ayuda").on("click",function(event){
	event.preventDefault();
	if ($(".ultima").hasClass("activa")){
		$('.ayuda img').addClass("hide").removeClass("activa");
		$(".primera").removeClass("hide").addClass("activa");
	}
	$(".ayuda").show();
	$(".mapa").hide();
});

$(".btn-ayuda").on("click",function(){
	if ($(".ultima").hasClass("activa")) {
		$(".ayuda").hide();
		$(".mapa").show();
	}else{
		$(".activa").next("img").removeClass("hide");
		$(".activa").next("img").addClass("activa");
		$(".activa:first").addClass("hide").removeClass("activa");
	}
});