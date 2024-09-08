const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i === friends.length - 1) {
    break;
  }
  string += ", ";
}
console.log(string);
console.log(friends.join(", "));

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
console.log(cards);

cards.splice(cards.indexOf("Карточка-3"), 1);
console.log(cards);

cards.splice(5, 0, "Карточка-6");
console.log(cards);

cards.splice(2, 1, "НоваКарточка-4");
console.log(cards);
