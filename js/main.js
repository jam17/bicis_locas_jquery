
function validateForm(){

	function validarNombre(){
		var caractInv = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
		//var nombre =document.getElementById("name").value;
		var nombre= $("#name").val();
		if(nombre.length==0){

			//var divContenedor=document.getElementsByClassName("name-container")[0];
			//var elemento= document.createElement("span");
			//var nodoTexto=document.createTextNode("Este campo no debe quedar vacío");
			//elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			//divContenedor.appendChild(elemento);
			var mensajeError="Este campo no debe quedar vacío";
			var span=$("#name").parent().append("<span>" + mensajeError+ "</span>");

			return false;
		}
		if(!caractInv.test(nombre)){
			//var nombre= $("#name").val();
			var mensajeError="Debe escribir caracteres validos";
			var span=$("#name").parent().append("<span>" + mensajeError+ "</span>");
			//var divContenedor=document.getElementsByClassName("name-container")[0];
			//var elemento= document.createElement("span");
			//var nodoTexto=document.createTextNode("Debe escribir caracteres validos");
			//elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			//divContenedor.appendChild(elemento);


			return false;
		} 
	}
	validarNombre();


	function validarApellido(){
		var caractInv = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
		//var apellido=document.getElementById("lastname").value;
		var apellido= $("#lastname").val();
		if(apellido.length==0){
			var mensajeError="Este campo no debe quedar vacío";
			var span=$("#lastname").parent().append("<span>" + mensajeError+ "</span>");
			//var divContenedor=document.getElementsByClassName("lastname-container")[0];
			//var elemento= document.createElement("span");
			//var nodoTexto=document.createTextNode("Este campo no debe quedar vacío");
			//elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			//divContenedor.appendChild(elemento);

			return false;
		}
		if(!caractInv.test(apellido)){
			var mensajeError="Debe escribir caracteres validos";
			var span=$("#lastname").parent().append("<span>" + mensajeError+ "</span>");
			/*var divContenedor=document.getElementsByClassName("lastname-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Debe escribir caracteres validos");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);*/

			return false;
		}

	}
	validarApellido();

	function validaMayuscula (){
		var nombre= $("#name").val();
		var apellido= $("#lastname").val();

		if(nombre.charAt(0) !== nombre.charAt(0).toUpperCase()){

			/*var divContenedor=document.getElementsByClassName("name-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("La primera letra debe ser mayúscula");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);*/
			var mensajeError="La primera letra debe ser mayúscula";
			
			var span=$("#name").parent().append("<span>" + mensajeError+ "</span>");

			return false;
		}

		if(apellido.charAt(0) !== apellido.charAt(0).toUpperCase()){

			/*var divContenedor=document.getElementsByClassName("lastname-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("La primera letra debe ser mayúscula");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);*/
			var mensajeError="La primera letra debe ser mayúscula";
			var span=$("#lastname").parent().append("<span>" + mensajeError+ "</span>");
			


			return false;
		}

	}
	validaMayuscula ();


	function validarCorreo(){
		var valideMail= /\w+@\w+\.+[a-z]/; 
		//var correo=document.getElementById("input-email").value;
		var correo= $("#input-email").val();
		if(correo.length==0){
			/*var divContenedor=document.getElementsByClassName("email-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Este campo no debe quedar vacío");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);*/
			var mensajeError="Este campo no debe quedar vacío";
			var span=$("#input-email").parent().append("<span>" + mensajeError+ "</span>");

			return false;
		}
		if (!valideMail.test(correo)){
			

			/*var divContenedor=document.getElementsByClassName("email-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Escriba un formato válido");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);*/
			var mensajeError="Escriba un formato válido";
			var span=$("#input-email").parent().append("<span>" + mensajeError+ "</span>");

			return false;
		}
	}
	validarCorreo();


	function validarContrasena(){
		  var contrasena= $("#input-password").val();
		//var contrasena=document.getElementById("input-password").value;
		if(contrasena.length==0){
			/*var divContenedor=document.getElementsByClassName("form-group")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Este campo no debe quedar vacío");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);*/
			var mensajeError="Este campo no debe quedar vacío";
			var span=$("#input-password").parent().append("<span>" + mensajeError+ "</span>");

			return false;
		}

		if(contrasena==="123456" ||  contrasena==="098754" || contrasena==="password" && contrasena.length<6){

			/*var divContenedor=document.getElementsByClassName("form-group")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Contraseña muy débil, debe cambiarla por una segura");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);*/
			var mensajeError="Contraseña muy débil, debe cambiarla por una segura";
			var span=$("#input-password").parent().append("<span>" + mensajeError+ "</span>");


			return false;
		}

	}
	validarContrasena();


	function validarSeleccion(){
		//var seleccion= $("#input-password").val();
		var seleccion=document.getElementsByTagName("select")[0].value;

		if(seleccion ==0){
			var divContenedor=document.getElementsByClassName("form-group")[1];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Debe elegir una bicicleta");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		}

	}
	validarSeleccion();


}




















