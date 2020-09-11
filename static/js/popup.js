var overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	animacion1=document.getElementById('ani'),
	texDia=document.getElementById('fecha'),
	animacion=document.getElementById('ani1'),
	texto=document.getElementById('encender');
	


var texHora,hoy,hora,boot,Min,Hor;
texHora=null;

function Mostrar(){
	
	overlay.classList.add("active")
	popup.classList.add("active")
	
}

function Cerrar(){
	overlay.classList.remove('active');
	popup.classList.remove('active');
	enviarH();
}

function Tiempo(){
	
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

