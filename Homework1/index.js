const people = [
  { name: "Jenny Jones", born: 1985, age: 40 },
  { name: "Mike Knowles", born: 2012, age: 13 },
  { name: "John Doe", born: 1980, age: 45 },
  { name: "Ronald Owen", born: 2008, age: 17 },
  { name: "Kelly Madison", born: 2002, age: 23 },
  { name: "Jenny Hendriksen", born: 1978, age: 47 },
  { name: "Allisa Grace ", born: 2005, age: 20 },
];

const numbersArray = [150, 224, 18, 15, 24, 2, 1025, 554, 8, 98, 112];

// - Филтрирање на дадена низа по даден параметар

const bornAfterYear2000 = people.filter((person) => person.born > 2000);
console.log(bornAfterYear2000);

const numbersBiggerThanFiveHudred = numbersArray.filter(
  (number) => number > 500
);
console.log(numbersBiggerThanFiveHudred);

// - Сортирање на дадена низа по даден параметар

const sortArrayAscending = numbersArray.sort((num1, num2) => num1 - num2);
console.log(sortArrayAscending);

const sortByYOBdescending = people.sort((x, y) => y.born - x.born);
console.log(sortByYOBdescending);

// - Сумирање на параметри од дадена низа

const sumOfNumbersArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of numbers: ${sumOfNumbersArray}`);

const sumOfYears = people
  .map((person) => {
    return person.age;
  })
  .reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of age of people array: ${sumOfYears}`);

// - Пронаоѓање на член од дадена низа

const findPerson = people.find((person) => person.born > 2005);
console.log(
  `First person born after 2005: ${findPerson.name}, born ${findPerson.born} `
);

const findNumber = numbersArray.find((number) => number > 200);
console.log(`First number bigger than 200: ${findNumber}`);
