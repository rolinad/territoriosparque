$(".seleccion").change(function(){
		var seleccionado = $(".seleccion option:selected").attr('id');
		/* si lo seleccionado es 0 (todos los territorios) se mostraran todos */ 
		if (seleccionado == '0') {
			$(".territorios figure").each(function(){
				$(this).show();
			});
		}
		else{

			$(".territorios figure").each(function(){
				var grupo = $(this).attr('grupo');
				if (seleccionado == grupo) {
					$(this).show();
				}else{
					$(this).hide();
				};
			});

		};

});