var images = ["images/imagen1.jpg","images/imagen2.jpg","images/imagen3.jpg","images/imagen4.jpg"];

document.Imagen.src = images[0]

var foto = document.querySelector(".foto");

var moverDerecha = document.querySelector(".slider-derecho")
var moverIzquierda = document.querySelector(".slider-izquierda")

var contador = 0;

function moverDer()
{

    contador++;

    if (contador > images.length -1)
    {
        contador = 0;
    }
    document.Imagen.src = images[contador];

}

//var intervalo = setInterval(moverDer,2000);

slider-derecho.addEventListener("click", function(){

   // clearInterval(intervalo);
    moverDer();
    //intervalo = setInterval(moverDer,5000);
});

function moverIzq(){

    contador--;
    if(contador<0) {

        contador = images.length-1;
    }
    document.Imagen.src = images[contador]
}

slider-izquierdo.addEventListener("click", function()
{

    //clearInterval(intervalo);
    moverIzq();
    //intervalo = setInterval(moverDer,5000);
});


function ocultar(){

    document.getElementById('galeria').style.display = 'grid';
    document.getElementById('slider').style.display = 'none';
    document.getElementById('btnGaleria').style.display='none';
    document.getElementById('btnSlider').style.display='block';
}

function mostrar(){

    document.getElementById('galeria').style.display = 'none';
    document.getElementById('slider').style.display = 'flex';
    document.getElementById('btnGaleria').style.display='block';
    document.getElementById('btnSlider').style.display='none';
}
  
    


