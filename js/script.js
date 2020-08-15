/*
git init: Inicializar el repositorio

git status: ver el estado de nuestro repositorio

git commit --m "(comentario)": subir al repositorio

:wq: salir de commit

git log: ver todos los commit realizados

git checkout -- : Restaurar al ultimo cambio

git diff: Ver modificaciones

git branch "nombre": Linea alternativa

git checkout "linea alternativa": Cambiar de linea

git merge (linea): Integrar lineas alternativas

git remote add origin (ruta): Determinar ruta para ir a la nube

git push -u origin (linea): Enviar a la nube

git reset --mixed (codigo)

git log --oneline --decorate --graph: Mostrar todos los commit

git clone (ruta): Descargar cambios de GitHub

Dirty deeds done dirt cheap!
*/

ar contador = 1 ;
var boton1 = "Boton #1";
var boton2 = "Boton #2";
var boton3 = "Boton #3";

function agregar(){

	contador++;
	var numero = "#" + contador;

	//Crear la primera caja
	var objCajaBoton = document.querySelector(".padre");
	var objCuadroBoton = document.createElement("section");
	objCuadroBoton.className = "cajaBoton";
	objCajaBoton.appendChild(objCuadroBoton);

	//Crear el titulo de la primera caja
	var objTituloBoton = document.createElement("article");
	objTituloBoton.className ="tituloBoton";
	objCuadroBoton.appendChild(objTituloBoton);
	objTituloBoton.innerHTML = numero;

	//Crear los botones
	var objBotones1 = document.createElement("button");
	var objBotones2 = document.createElement("button");
	var objBotones3 = document.createElement("button");
	objBotones1.className = "botones";
	objBotones2.className = "botones";
	objBotones3.className = "botones";
	objTituloBoton.appendChild(objBotones1);
	objTituloBoton.appendChild(objBotones2);
	objTituloBoton.appendChild(objBotones3);
	objBotones1.innerHTML = boton1;
	objBotones2.innerHTML = boton2;
	objBotones3.innerHTML = boton3;

	//Crear la descripcion de la primera caja
	var objDescripcionBoton = document.createElement("article");
	objDescripcionBoton.className = "descripcionBoton";
	objCuadroBoton.appendChild(objDescripcionBoton);

	//-------------------------------------------------------

	//Crear la segunda caja
	var objCuadroImagen = document.createElement("section");
	objCuadroImagen.className = "cajaImagen";
	objCajaBoton.appendChild(objCuadroImagen);

	//Crear el titulo de la segunda caja
	var objTituloImagen = document.createElement("article");
	objTituloImagen.className = "tituloImagen";
	objCuadroImagen.appendChild(objTituloImagen);

	//Crear la descripcion de la segunda caja
	var objDescripcionImagen = document.createElement("article");
	objDescripcionImagen.className = "descripcionImagen";
	objCuadroImagen.appendChild(objDescripcionImagen);
}