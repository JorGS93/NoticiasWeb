

$('#mainNav').affix({
  offset: {
    top: 100
  }
})

	


$(document).ready(function()
{

$('#boton').click(function(event) {
$('#cajon2').show(500);
$('#boton').hide();
});

});



$(function(){
    //cargar comunidades
    $.getJSON( "https://rawgit.com/JorGS93/NoticiasWeb/master/js/news.json", function( jsonObject ) {
        ponerTitulo( jsonObject );
});

     function ponerTitulo(json){
  $.each( json, function( i, news ) {
    $("#titulo").append(news.titulo);
  }); 
}
