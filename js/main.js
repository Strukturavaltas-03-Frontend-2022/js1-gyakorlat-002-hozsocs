/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

const arr = [];
const generateList = (arr) => {
  var str = "";
  for (let item = 0; item < arr.length; item++) {
    str = str + " <li> " + arr[item] + " </li>";
  }
  return " <ul> " + str + " </ul>";
};
