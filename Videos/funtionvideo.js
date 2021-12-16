function SINO(cual) {
    var contenedor = document.getElementById("videoculto");

   var elElemento=document.getElementById(cual);
   if(elElemento.style.display == 'block') {
      elElemento.style.display = 'none';

   } else {
      elElemento.style.display = 'block';
     contenedor.style.display = "none";
   }
}
