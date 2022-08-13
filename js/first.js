/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
let Numericarray = [];
let akkumulator = 0;

const brutto = (Numericarray) => {
  Numericarray.forEach((element) => {
    akkumulator = akkumulator + Math.round(element * 1.27);
  });
  return akkumulator;
};
