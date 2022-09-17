class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.mascotas = mascotas
        this.libros = libros
    }
getFullName(){
    return`Hola Mi nombre es ${this.nombre} y mi apellido ${this.apellido}`
}

addBook(nombre, autor){
    const newBook ={nombre:nombre, autor: autor};
    console.log(newBook);
    this.libros.push(newBook)
}
addMascota(nombre){
    const newMascota = {nombre:nombre};
    console.log(newMascota);
    this.mascotas.push(newMascota);
}
countMascotas(){
    const contar = this.mascotas.length
    console.log(contar)

}

getBookNames(){
    let coleccion = this.libros
    let nombre = [];
    coleccion.map(libro=>{
        nombre.push(libro.nombre)
        
    })
    
    console.log(nombre)


}
}





let usuario1 = new Usuario ('Adrian','Rodriguez',[{nombre:"la laguna embrujada" ,autor:"Juan chico"}], ["Tobi", "utula", "blass"])

console.log(usuario1)
usuario1.addBook("la laguna enbrujada","Juan chico")
usuario1.addMascota("Lola")
usuario1.countMascotas()
usuario1.getFullName()
usuario1.getBookNames()





