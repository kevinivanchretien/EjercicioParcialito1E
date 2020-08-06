/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	let Categoria;
	let precioArt;
	let nombreArt;
	let cantArt;
	let precioMayor=0;
	let PrecioB;
	let contador = 0;
	let Respuesta = "si";

	while (Respuesta == "si") 
	{
		Categoria = prompt("eliga una Categoria: almacen/lacteos/limpieza/bebida");
		nombreArt = prompt("Que articulo desea?")
		precioArt = parseFloat(prompt("ingrese el precio"));

		if(precioArt >precioMayor){
		precioMayor=precioMayor;
		}
		switch(Categoria){
		case "bebida":
			if(precioArt >precioB){
			precioB=precioMayor;
			}


		Respuesta=prompt("Desea otra cosa? si/no").toLocaleLowerCase(Respuesta);



	}









	//alert("Hola Mundo");
}