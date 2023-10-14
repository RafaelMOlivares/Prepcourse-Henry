/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
    // Crea el constructor de la clase "Persona".
    // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
    // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
    // sus valores.
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }
    detalle = function () {
      return {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domicilio: this.domicilio,
      };
    };
  }
  /* 
  var persona1 = new Persona('Alejo', 'Mejia', 68, 'Calle 27')
  
  persona1 = Persona{nombre: 'Alejo', apellido: 'Mejia', edad: 68, domicilio: 'Calle 27'}
  
  persona1.detalle() --> {nombre: 'Alejo', apellido: 'Mejia', edad: 68, domicilio: 'Calle 27'}
  */
  
  function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
    // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
    // Recibirás las propiedades por parámetro.
    // Retornar la instancia creada.
    // Tu código:
    var persona1 = new Persona(nombre, apellido, edad, domicilio);
    return persona1;
  }
  
  function agregarMetodo() {
    // La función agrega un método "datos" a la clase "Persona".
    // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
    // Ejemplo: "Juan, 22 años".
    // Tu código:
    Persona.prototype.datos = function () {
      return this.nombre + ', ' + this.edad + ' años';
    };
  }
  /*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
  
  function mayuscula(nombre) {
    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    // Tu código:
    var letraMayuscula = nombre[0].toUpperCase();
    var nombreCompleto = letraMayuscula + nombre.slice(1);
  
    return nombreCompleto;
  }
  
  function invocarCallback(cb) {
    // Invoca/ejecuta el callback `cb`.
    // [NOTA]: no debes reotrnar nada.
    // Tu código:
    cb();
  }
  
  function operacionMatematica(num1, num2, cb) {
    // En este ejercicio recibirás dos números y un callback.
    // El callback realiza una operación matemática, por lo que necesita de los dos números.
    // Retorna el resultado del callback pasándole como parámetros los números.
    // Tu código:
  
    var resultado = cb(num1, num2);
  
    return resultado;
  }
  
  function sumarArray(arrayOfNumbers, cb) {
    // Recibes un arreglo de números y un callback.
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // [NOTA]: no debes reotrnar nada.
    // Tu código:
  
    //arrayOfNumbers = [1, 2, 3, 4, 5] --> 15
    //                             ^
    var suma = 0;
  
    arrayOfNumbers.forEach(function (numero) {
      suma = suma + numero;
    });
  
    cb(suma);
  }
  
  function forEach(array, cb) {
    // Recibes un arreglo y un callback.
    // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
    // Debes pasarle el elemento como argumento al callback.
    // Tu código:
    array.forEach(function (elemento) {
      cb(elemento);
    });
  }
  
  function map(array, cb) {
    // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
    // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
    // Retorna el nuevo arreglo.
    // Tu código:
    var arregloDeResultados = array.map(function (elemento) {
      return cb(elemento);
    });
  
    return arregloDeResultados;
  }
  
  function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    //arrayOfStrings = ["ana", "banana", "casa", "hola", "anillo", "amigo"]
  
    var filtrados = [];
  
    for (var i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i][0] === 'a') {
        filtrados.push(arrayOfStrings[i]);
      }
    }
  
    return filtrados;
  }
  
  /* 
   function filter(arrayOfStrings) {
     var nuevoArreglo = arrayOfStrings.filter(function(elemento){
        if(elemento[0] === "a"){
           nuevoArreglo.push(elemento)}
        })
     return nuevoArreglo
  */