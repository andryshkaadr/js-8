console.log("Вивести на сторінку в один рядок через кому числа від 10 до 20.");
let str = "";
for (let i = 10; i < 21; i++) {
  str += `${i} `;
}
console.log(str);

console.log("Вивести квадрати чисел від 10 до 20.");
str = "";
for (let i = 10; i < 21; i++) {
  str += `${i * i} `;
}
console.log(str);

console.log("Вивести таблицю множення на 7.");
let k = 1;
while (k < 11) {
  console.log(`7 * ${k} = ${7 * k}`);
  k++;
}

console.log("Знайти суму всіх цілих чисел від 1 до 15.");
let summary = 0;
for (let i = 1; i < 16; i++) {
  summary += i;
}
console.log(`summary = ${summary}`);

console.log("Знайти добуток усіх цілих чисел від 15 до 35.");
let multiplication = 1;
for (let i = 15; i < 36; i++) {
  multiplication *= i;
}
console.log(`multiplication = ${multiplication}`);

console.log("Знайти середнє арифметичне всіх цілих чисел від 1 до 500.");
let average = 0;
let counter = 0;
summary = 0;
for (let i = 1; i < 501; i++) {
  summary += i;
  counter++;
}
average = summary / counter;
console.log(`average = ${average}`);

console.log("Вивести суму лише парних чисел в діапазоні від 30 до 80.");
summary = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 == 0) {
    summary += i;
  } else {
    continue;
  }
}
console.log(`summary = ${summary}`);

console.log("Вивести всі числа в діапазоні від 100 до 200 кратні 3.");
k = 100;
str = "";
do {
  if (k % 3 == 0) {
    str += `${k} `;
  }
  k++;
} while (k <= 200);
console.log(str);

let number = 18;
console.log(
  `Дано натуральне число - ${number}. Знайти та вивести на сторінку всі його дільники.`
);
str = "";
counter = 0;
summary = 0;
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    str += `${i} `;
    if (i % 2 == 0) {
      counter++;
      summary += i;
    }
  }
}
console.log(str);
console.log(`Кількість його парних дільників - ${counter}`);
console.log(`Сума його парних дільників - ${summary}`);



console.log("Надрукувати повну таблицю множення від 1 до 10.");

for (let i = 1; i < 11; i++) {
  str = "";
  for (let j = 1; j < 11; j++) {
    str+=`${i} * ${j} = ${i * j}\t`
  }
  console.log(str);
}
