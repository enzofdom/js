//Crear una función que determine si un número es par o impar:

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
      console.log("El número es par");
    } else {
      console.log("El número es impar");
    }
  }
  
  verificarParImpar(4); 
  verificarParImpar(7); 

//Crear una función que determine qué número es mayor:

function determinarNumeroMayor(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " es mayor que " + num2 );
    } else if (num2 > num1) {
      console.log(num2 + " es mayor que " + num1 );
    } else {
      console.log("Los números son iguales");
    }
  }
  
  determinarNumeroMayor(3, 7); 
  determinarNumeroMayor(10, 10); 
  
  //Crear una función que determine si un número es múltiplo de 5:

  function MultiploDeCinco(numero) {
    if (numero % 5 === 0) {
      console.log("El número es múltiplo de 5.");
    } else {
      console.log("El número no es múltiplo de 5.");
    }
  }
  
  MultiploDeCinco(15); 
  MultiploDeCinco(7); 

  //Crear una función que imprima los números desde 0 hasta el número indicado:

  function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }
  
  imprimirNumerosHasta(7);

  //Crear una función que imprima una palabra la cantidad de veces indicada:

  function imprimirPalabraVeces(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
  }
  
  imprimirPalabraVeces("Javascript", 3);
 
  //Crear una función que imprima todos los valores de un array:

  function imprimirValoresArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  const miArray = [1, 2, 3, 4, 5];
  imprimirValoresArray(miArray);
  
  //Crear una función que imprima todos los valores de un array, excepto el de la quinta posición:

  function ValoresArrayExceptoQuintaPosicion(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
  }
  
  const segarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ValoresArrayExceptoQuintaPosicion(segarray);

  //Crear una función que multiplique cada número de un array por un número dado:

  function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * numero);
    }
  }
  
  const terarray = [1, 2, 3, 4, 5];
  multiplicarArrayPorNumero(terarray, 2);



  