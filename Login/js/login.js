
var textoArchivo = "";

 document.getElementById('inputfile').addEventListener('change', function() {
     var fr=new FileReader();
     fr.onload=function(){
         textoArchivo = fr.result;
        
        console.log(textoArchivo);
    } 
    fr.readAsText(this.files[0]);
   }) 

function Loguear(){
    
    var nombreUsuario1 = document.getElementById('nombreUsuario').value;
    var passUsurio = document.getElementById('passUsuario').value;
    if (nombreUsuario1 == "") {
        alert('Ingrese un nombre de usuario');
        return false;
    }else 
    {
        var inicioPalabra = 0;
        var fila = 0;
        var palabra = "";
        var pass = ""
        var validUser = false;
        var validPass = false ;
        var userFila = -1;
        for(var i = 0; i<textoArchivo.length; i++){
            var caracter = textoArchivo[i]
            if(caracter==","){
                palabra = textoArchivo.slice(inicioPalabra,(i));
                inicioPalabra = i+1
                if(palabra == nombreUsuario1){
                    validUser = true;
                    userFila = fila;
                } 
                console.log(palabra);
           }else if(caracter=="\n"){ 
                pass = textoArchivo.slice(inicioPalabra,(i-1));
                if(pass = passUsurio && validUser && fila == userFila){
                   alert("Usuario y contraseña validos, Bienvenido!!")
                   validPass = true;
                }
                inicioPalabra = i+1
                fila++;
                console.log(pass);
           }
        }
        if(!validPass) alert("Contraseña incorrecta o usuario no existe");
    }
  }