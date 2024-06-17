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

/* SCRIVI QUI LA TUA RISPOSTA 
String: e`una sequenza di caratteri, va descritta tra apici anche se composto da cifre non e` un numero;(immaginala come la risposta una domanda aperta)
Number: e` una sequenza di cifre esprime il valore numerico di un contenuto;(immaginala come una risposta a una funzione algebrica)
Boolean: rappresenta la risposta a una domanda con solo due possibili risposte (tipicamente True/False);(immaginala come rispondere si` o non a una domanda)
Undefined: e` un valore non definito per mia scelta ma non e` un valore nullo;(rappresenta la mancanza di una risposta, non un valore nullo)
Null: e` un valore nullo per mia scelta.(matecatimente e` un valore nullo, e` una stringa di valore nullo, boolealmente e` sempre falso)
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Antonio";
console.log(myName);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sum = 12 + 20;
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Costantini";
console.log(myName);

//in questo blocco dimostro tramite la console che non puoi cambiare valore a una costante
/*{
  const mySurname = "Antonio";
  console.log(mySurname);
  mySurname = "Costantini";
  console.log(mySurname);
}*/

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
let name1 = "john";
let name2 = "John";
let verify1 = name1 === name2 ? true : false;
console.log(verify1);

let lcname1 = name1.toLowerCase();
console.log(lcname1);
let lcname2 = name2.toLowerCase();
console.log(lcname2);
let verify2 = lcname1 === lcname2 ? true : false;
console.log(verify2)