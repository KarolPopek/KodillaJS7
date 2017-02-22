
var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
var animalToUpper = animal.toUpperCase();

var reptext = text.replace('Papugi', animalToUpper);

var partOfText = reptext.slice(0, reptext.length / 2);

console.log(partOfText);
