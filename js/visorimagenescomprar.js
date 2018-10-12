function cambiar(evento, timeOut=200,timeIn=200) {
  var principal = document.getElementById("principal");
  $("#principal").fadeOut(timeOut,"linear",function(){principal.src=evento.target.src;}).fadeIn(timeIn);
}

var miniaturas = document.getElementById("miniaturas").children;
for (var i = 0; i < miniaturas.length; i++) {
  miniaturas[i].onclick = (evento) => cambiar(evento,200,200);
}
