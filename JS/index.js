// Вам потрібно написати функцію, яка отримує на вхід рядок тексту. Функція повинна повернути об'єкт, в якому кожен ключ - це унікальне слово з тексту, а значення - кількість разів, коли це слово зустрічається в тексті.

function analyzeText(text) {
  const regExp = /[.,]/g;
  const textWords = text.replace(regExp, "").split(" ");
  const textOfUniqWords = {};
  for (let word of textWords) {
    let lowerCaseWord = word.toLowerCase();
    if (lowerCaseWord in textOfUniqWords) {
      textOfUniqWords[lowerCaseWord]++;
    } else {
      textOfUniqWords[lowerCaseWord] = 1;
    }
  }
  return textOfUniqWords;
}
const text =
  "Це простий текст, який використовується для тестування простих задач з програмування. Текст повинен містити кілька унікальних слів.";
console.log(analyzeText(text));
