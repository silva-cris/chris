var overlay = document.getElementById('overlay'),// acceso a la capa 
	popup = document.getElementById('popup'),  // variable de una clase
	animacion1=document.getElementById('ani'),  // animaciones 
	texDia=document.getElementById('fecha'),    // elemento de la hora
	animacion=document.getElementById('ani1'),    // animaciones 
	texto=document.getElementById('encender');   // boton encender
	


var texHora,hoy,hora,boot,Min,Hor;
texHora=null;

function Mostrar(){
	// relacionado a boton configurar , abre elmenu poput
	overlay.classList.add("active")
	popup.classList.add("active")
	
}

function Cerrar(){
	overlay.classList.remove('active');
	popup.classList.remove('active');
	enviarH();
}

function Tiempo(){ // calculamos la hora , la actualza 
	
	hoy=new Date();
	if(hoy.getHours()<10){
		Hor="0"+hoy.getHours();
	}else{
		Hor=hoy.getHours();
	}
	if(hoy.getMinutes()<10){
		Min="0"+hoy.getMinutes();
	}else{
		Min=hoy.getMinutes();
	}
	hora=Hor+":"+Min;
	
	if(hora==texHora){
		animacion1.src="/static/images/reg1.gif";
		boot=1;
	}else{
		animacion1.src="/static/images/reg.png"
		
	}

}


window.onload = function() {
	
	setInterval(Tiempo, 1000);

  }

