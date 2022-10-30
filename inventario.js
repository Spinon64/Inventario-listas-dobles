class Producto {

    constructor(nombre, codigo, cantidad, costo) {

        this.nombre = nombre;
        this.costo = costo;
        this.codigo = codigo;
        this.cantidad = cantidad;
        this.next = null;
        this.ant = null;
    }

    info(){
        return `Nombre = ${this.nombre}, codigo = ${this.codigo}, cantidad = ${this.cantidad}, costo = ${this.costo}`;
    }
    
}



class Nodo{
    constructor(producto){
        this.producto = producto;
        this.next = null;
    }
}

class Inventario{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

//Codigo agregar productos


agregar(producto){
    if (this.primero === null){
        this.primero = producto
    } else {
        let temp = this.primero
        while (temp.next != null){
            temp = temp.next
        }
        temp.next = producto
        temp.next.ant = temp
    }
  
}
   
//Codigo eliminar productos

eliminar(codigo) {
    let temp = this.primero
        if (this.primero.codigo === codigo){
            this.primero = this.primero.next
            this.primero.ant = null
        } else {
            while (temp.next.codigo != codigo){
                temp = temp.next
            }
    
            if (temp.next.codigo === codigo){
                temp.next = temp.next.next
                temp.next.ant = temp
            } else {
                alert ('Producto no encontrado')
            }
        } 
}
//Codigo buscar productos

buscar(codigo){ 
    let temp = this.primero;
        while (temp != null) {
            if(Number(temp.codigo)== Number(codigo)){ 
                return temp;
        } else {
            temp = temp.next;
        }
}
    return null;
}


//Codigo listar productos

listar(){   
    if (this.primero != null) {
        return recorrerListar(this.primero);
    } return "No existen productos";
         function recorrerListar(producto){
            if(producto.next == null) {
                return `${producto.info()}`;
            } else {
                return `${producto.info()}\n${recorrerListar(producto.next)}`;
        }
     }
 }

//RecorrerInverso

recorrerInverso(nodo){
    if(nodo.next == null)
        return `${nodo.info()}`
        return `${this.recorrerInverso(nodo.next)} ${nodo.info()}`; 
}


//Codigo listar inverso

listarInverso(){
    if(this.primero == null){
        return null;
    } else {
        let prod = "";
            prod = this.recorrerInverso(this.primero);
                return prod;
    }
}

}




