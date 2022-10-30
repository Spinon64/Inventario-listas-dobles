
let miAlmacen = new Inventario();

//  Boton agregar producto

let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", (event)=>{
    let nombre = document.getElementById("Nombre").value;
    let codigo = document.getElementById("Codigo").value;
    let cantidad = document.getElementById("Cantidad").value;
    let costo = document.getElementById("Costo").value;

    let producto = new Producto(nombre, codigo, cantidad, costo);
    miAlmacen.agregar(producto);
    document.getElementById("listado").innerHTML =``;
    event.preventDefault();
});

//Boton para eliminar producto

let btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", (event) => {
    document.getElementById("Actividades").innerHTML;
    codigo = document.getElementById("codigo").value;
    let bEliminar = miAlmacen.eliminar(codigo);
    if (bEliminar != null) {
        return document.getElementById("listado").innerHTML += `<p>¡Se ha eliminado el producto con el código ${codigo}!</p>`;
    }
    document.getElementById("listado").innerHTML += `<p>¡No existe el producto con el código ${codigo}!</p>`;
    event.defaultPrevented();
});

//Boton para listar producto

let btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click", (event)=>{
    document.getElementById("listado").innerHTML=`${miAlmacen.listar()}`
    event.preventDefault();
});

//Boton para listar inverso producto

let btnListarInv = document.getElementById("btnListarInv");
btnListarInv.addEventListener("click", (event) => {
    document.getElementById("listado").innerHTML =`${miAlmacen.listadoInverso()}`
    event.defaultPrevented();
});

//Boton para buscar producto

const btnBuscar = document.getElementById("btnBuscar");
    btnBuscar.addEventListener("click", (event) => {
        document.getElementById("Actividades").innerHTML;
        codigo = document.getElementById("codigo").value;
        const producto = inventario.buscar(codigo);
        if (producto != null) {
            return document.getElementById("listado").innerHTML += `<p>El producto con el código: ${codigo} existe</p>`;
        }
        document.getElementById("listado").innerHTML += `<p>No existe el producto con el código: ${codigo}</p>`;
        event.defaultPrevented();
    });

// Boton para restablecer\
const btnRestablecer = document.getElementById("btnRestablecer");
    btnRestablecer.addEventListener("click", (event) => {
        document.getElementById("Actividades").innerHTML = null;
        document.getElementById("listado").innerHTML = null;
        event.defaultPrevented();

    });
