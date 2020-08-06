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
	let Producto;
	let Precio;
	let Categoria;
	//let PrecioMayor = 1000;
	//let PrecioMenor = 0;
	let contadorBebida = 0;
	let LacteosPrecio =0;
	let LacteosNombre;
	let PrecCaro;
	let ProdCaro;
	let Bandera = 0;
	let Respuesta = "si";

	while (Respuesta == "si") {
		Producto = prompt("Ingrese Nombre del producto").toLowerCase();
		Precio = parseInt(prompt("Ingrese cuanto cuesta"));
		Categoria = prompt("En que categoria se encuentra: almacen, lacteos, limpieza, bebidas").toLowerCase();
		if (Precio <= 1000 && Precio >= 0) {

			if (Bandera == 0) {
				PrecCaro = Precio;
				ProdCaro = Producto;
				Bandera = Bandera + 1;

			}
			else if (Precio > PrecCaro && Producto != ProdCaro) {
				PrecCaro = Precio;
				ProdCaro = Producto;

			}
			else if (Categoria == "lacteos" || Precio > LacteosPrecio) {
				LacteosPrecio = Precio;
				LacteosNombre = Producto;

			}
		}
		if (Categoria == "bebidas") {
			contadorBebida = contadorBebida + 1;
		}
		Respuesta = prompt("Desea continuar? si/no").toLowerCase();
	}
	/*Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas*/

	document.write("El Producto mas caro fue: " + ProdCaro + "<br>");
	document.write("El lacteo mas caro fue: " + LacteosNombre + "<br>");
	document.write("Cantidad de bebidas: " + contadorBebida + "<br>");
















	//alert("Hola Mundo");
}