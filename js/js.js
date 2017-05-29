$('#mainNav').affix({
  offset: {
    top: 100
  }
})

	


$(document).ready(function(){
	$.getJSON( "js/news.json", function( jsonObject ) {
    console.log(jsonObject);
     crearNoticia( jsonObject );
	});


$('#boton').click(function(event) {
$('#cargarNoticias').show(500);
$('#boton').hide();
});

});



function crearNoticia(json) {

      var mas=document.getElementById("cargarNoticias");


    $.each(json, function (i, news) {


        var div = document.createElement("div");
        div.className = "container noticias";
        mas.appendChild(div);

        var col1 = document.createElement("div");
        col1.className = "col-md-4 noticia1";
        mas.appendChild(col1);
        div.appendChild(col1);

        var tumb = document.createElement("div");
        tumb.className = "thumbnail imgtxt";
        col1.appendChild(tumb);

        //pintar titulo
        var titulo = document.createElement("p");
        titulo.className = "titulo";
        titulo.textContent = json[0].titulo;
        tumb.appendChild(titulo);

        //poner foto
        var img = document.createElement("img");
        img.className = "img-responsive fotos";
        img.src = json[0].img;
        img.alt = "Imagen cargada";
        tumb.appendChild(img);

        //poner descripcion
        var titdiv = document.createElement("p");
        titdiv.className = "descripcion";
        titdiv.textContent = json[0].descripcion;
        tumb.appendChild(titdiv);
	    
	    
	 //SEGUNDA NOTICIA   
	    var col2 = document.createElement("div");
        col2.className = "col-md-4 noticia2";
        mas.appendChild(col2);
        div.appendChild(col2);


        var tumb = document.createElement("div");
        tumb.className = "thumbnail imgtxt";
        col2.appendChild(tumb);

        var titulo = document.createElement("p");
        titulo.className = "titulo";
	titulo.textContent = json[1].titulo;
        tumb.appendChild(titulo);

        var img = document.createElement("img");
        img.className = "img-responsive fotos";
        img.src = json[1].img;
        img.alt = "Imagen cargada";
        tumb.appendChild(img);

       var titdiv = document.createElement("p");
        titdiv.className = "descripcion";
         titdiv.textContent = json[1].descripcion;
        tumb.appendChild(titdiv);

	
    })};



