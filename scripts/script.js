/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*esistono diversi tipi di dati, di seguito quelli di tipo primitivo:
undefined: questo risultato viene quando troviamo una variabile alla quale non è stato assegnato un valore es: ( let myName = ) 
number: tipo di dato che rappresenta numeri es:(1, 20, -5, 3000, -200, 0.....  )
sting: sequenda di caratteri scritta all'interno di apici (`, ', ".) es:( "ciao", `è l'una`, 'Thomas'....)
boolean: questo tipo di dato rappresenta valori logici con solo due tipi di valore: true(vero) e false(falso)
null: rappresenta una mancanza di valore (valore nullo)
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName = `Thomas`;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// primo modo
let firstNumber = 12;
let secondNumber = 20;
let somma = firstNumber + secondNumber;

// secondo modo
let number12 = 12;
number12 += 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//myName = `Galbignani`; // questo darà un errore
//console.log((myName = `Galbignani`));

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name1 = `jhon`; //true
const name2 = `Jhon`; //false
//
//  primo modo di verificare la loro uguaglianza
//let sameName = name1 && name2;
//console.log(sameName);
//
//  secondo modo di verificare la loro uguaglianza
//let sameName = name1 === name2 ? true : false;
//console.log(sameName);
//
//  con questa variazione entrambi i nomi risultano uguali
//let sameName = name1 === name2 ? true : !false;
//console.log(sameName);
// let sameName = name1.toLowerCase() === name2.toLowerCase();
