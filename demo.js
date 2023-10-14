/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
    // Crea una Clase de ES6 o una función constructora llamada "Usuario".
    // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
    // El valor de cada propiedad la recibirá por parámetro.
    // Además, esta clase debe tener un método llamado "saludar".
    // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
    // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
    // Retornar la clase.
    // Tu código:
    function Usuario(usuario, nombre, email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
      this.saludar = function () {
        return 'Hola, mi nombre es ' + this.nombre;
      };
    }
    //sintaxis de clase

  /* class Usuario {
   constructor(usuario, nombre, email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
   }
   
   saludar = function () {
      return 'Hola, mi nombre es ' + this.nombre;
   };
} */

  return Usuario;
}

/* 
 var usuario1 = new Usuario('Alejo123', 'Alejo', 'hola@mail.com', 'hola123$$')
 
 usuario1 = {usuario: 'Alejo123', nombre: 'Alejo', email; 'hola@mail.com', password: 'hola123$$'}
*/

function agregarMetodoPrototype(Usuario) {
  // Agrega un método al prototipo de "Usuario".
  // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
  // Tu código:
  Usuario.prototype.saludar = function () {
    return 'Hello World!';
  };
}

function agregarStringInvertida() {
  // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse".
  // [PISTA]: necesitarás utilizar el objeto "this".
  //'hola' --> 'aloh'
  String.prototype.reverse = function() {
   var array = this.split('')
   var arrayInvertido = array.reverse()
   var stringInvertido = arrayInvertido.join('')

   return stringInvertido;
  }
}