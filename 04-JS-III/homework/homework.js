// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var x= array[0];
  return x;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var x= array[array.length-1];
  return x;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i= 0; i< array.length; i++){
    array[i]++;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var x= palabras[0];
  for (let i= 1; i< palabras.length; i++){
    x= x+' '+palabras[i];
  }
  return x;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var ok= false;
  var i= 0;
  do{
    if (array[i] === elemento){
      ok= true;
    }
    i++;
  }while ( (ok !== true) && (i < (array.length - 1) ) );
  return ok;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma= 0;
  for (let i= 0; i< numeros.length; i++){
    suma= suma + numeros [i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma= 0;
  for (let i= 0; i< resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
  }
  var prom = suma / resultadosTest.length;
  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max= -1;
  for (let i= 0; i< numeros.length; i++){
    if (numeros[i] > max){
      max= numeros[i];
    }
  }
  return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0){
    return 0;
  }
  else if (arguments.length === 1){
    return arguments;
  }
  else{
    var x= 1;
    for (let i= 0; i< arguments.length; i++){
      x= x* arguments;
    }
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cant= 0;
  for (let i= 0; i< arreglo.length; i++){
    if (arreglo[i] > 18){
      cant++;
    }
  }
  return cant;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var x= 'Es dia Laboral';
  if ( (numeroDeDia === 7) || (numeroDeDia === 1) ){
    x= 'Es fin de semana';
  }
  return x;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var ok= true;
  var i= 0;
  do{
    if (arreglo[i] !== arreglo[i+1]){
      ok= false;
    }
    i++;
  }while ( (ok) && (i< (arreglo.length - 1) ) );
  return ok;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var v= [];
  var cant= 0;
  for (let i= 0; i< array.length; i++){
    if (array[i] === 'Marzo') {
      v.push('Marzo');
    }
    else if (array[i] === 'Enero'){
      v.push('Enero');
    }
    else if (array[i] === 'Noviembre'){
      v.push('Noviembre');
    }
  }
  if (v.length === 3){
    return v;
  }
  else{
    return 'No se encontraron los meses pedidos';
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var v= [];
  for (let i= 0; i< array.length; i++){
    if (array[i] > 100){
      v.push(array[i]);
    }
  }
  return v;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i= 0;
  var v= [];
  var suma= numero;
  do{
    suma= suma+ 2;
    v.push(suma);
    i++;
  }while ( (i < 10) && (suma !== i) );
  if (i === 10){
    return v;
  }
  else{
    return 'Se interrumpió la ejecución';
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var v= [];
  var suma= numero;
  var i= 0;
  do{
    if (i !== 5){
      suma= suma + 2;
      v.push(suma);
    }
    i++;
  }while (i < 10);
  return v;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
