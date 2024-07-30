
/* 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
 */
function Espar(numero){
if (numero%2==0){
console.log("Es par");
return
}
else{

console.log("Es impar");
return
}
}

/* 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
 */
function esmayor(numero_uno,numero_dos){
    
    if  (numero_uno===numero_dos){

 

        console .log("Son iguales") ;
        return
    }

    if (numero_uno>numero_dos){
        console .log("El numero ".concat(numero_uno," es mayor")) ;
        return
    }
    else{



    console .log('El numero' .concat( $numero_dos, 'es mayor')) ;
        return
    }

}
/* 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
 */
function multiplodecinco( numero)
{
    if (numero%5==0){
    console.log("Es multiplo de 5");
    return
    }
    else{
    
    console.log("No es multiplo de 5");
    return
    }
    }

/*     4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
 */
function imprimehasta(numerodeveces){

    if (typeof numerodeveces==="number") {

        for (let index = 0; index <= numerodeveces; index++) {
        
            console.log(index);
            
        }

    }
    else
    {
        console.log("Ingrese numero");
    }

 
    
    }

/* 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
 */
function imprimeveces(numerodeveces,texto){


for (let index = 0; index < numerodeveces; index++) {
    
    console.log(texto);
    
}

}


/* 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array. */

function imprimirarray(arreglo){

    for( let i = 0 ; i < arreglo.length ; i++){
		console.log("Elemento:" + arreglo[i] + " y estoy en la posición  " +  i);
	}

}

/* 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0". */


function imprimirmenoselcirco(arreglo){

    for( let i = 0 ; i < arreglo.length ; i++){

        if (i != 5){

        
		console.log("Elemento:" + arreglo[i] + " y estoy en la posición  " +  i);
    }
	}

}

/* ejemplo imprimirmenoselcirco([1,2,3,4,5,6,7,8,9,10]);
 */

/* 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro. */

function imprimirpor(arreglo , multiplicador){
    let resultado=0
    for( let i = 0 ; i < arreglo.length ; i++){

     resultado=multiplicador * arreglo[i] 

        
		console.log("Elemento:" + arreglo[i] + " multiplicado por  " +  multiplicador + "el resultado es "+resultado);
    
	}

}