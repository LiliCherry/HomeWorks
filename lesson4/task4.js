// Задано предложение - подсчитать количество вхождений каждого слова в
// предложении. Вывести список уникальных слов и напротив каждого слова -
// сколько раз встретилось.

var sentence = 'Да, да, да, ты прав.';

var quantityWords = 0;

for (var element of sentence) {
    if (element === ' ') {
        quantityWords += 1;
    }

}
quantityWords += 1;

function calculateWords() {
    var words = '';
    var uniqueWords = {};

    for (let i = 0; i < sentence.length; i++) {
        var element = sentence[i];
        if (element === ' ' || element === '.') {
            var wordsWithoutPunctuation = words.replace(/[,.?!:; ]/g, '');
            wordsWithoutPunctuation = wordsWithoutPunctuation.toLowerCase();
            var wordsCounter = uniqueWords[wordsWithoutPunctuation];
            if (wordsCounter !== undefined) {
                uniqueWords[wordsWithoutPunctuation] += 1;
            } else {
                uniqueWords[wordsWithoutPunctuation] = 1;
            }
            words = '';
        }
        words += element;
    }

    console.log('Количество вхождений каждого слова: ' + quantityWords);
    console.log('Список уникальных слов: ' + JSON.stringify(uniqueWords));

    //С JSON мне подсказали, 
    //так как у меня не получалось вывести и ключ, 
    //и значение объекта через двоиточие.
    //Пыталась через Object.entries, но там через запятую.
}

calculateWords();

