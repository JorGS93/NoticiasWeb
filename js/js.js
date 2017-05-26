$('#mainNav').affix({
  offset: {
    top: 100
  }
})

	


$(document).ready(function(){
	$.getJSON( "https://rawgit.com/JorGS93/NoticiasWeb/master/js/news.json", function( jsonObject ) {
     ponerTitulo( jsonObject );
	});


$('#boton').click(function(event) {
$('#cajon2').show(500);
$('#boton').hide();
});

});




     function ponerTitulo(json){
  $.each( json, function( i, news ) {
    $("#titulo").append(news[0].titulo);
  });
  }

