// Урок шестой
// (С этого занятия и все последующие по поводу вывода данных - выводим в HTML
// документе, если не указано иного)
// - Посчитать количество ссылок на странице, вывести их содержимое
// - Посчитать количество тегов “p” на странице которые имеют класс “phrase” -
// вывести их содержимое
// - В задании из пятого урока, взять массив со студентами и вывести их на
// страницу согласно сверстанной HTML-структуре, рядом с каждым студентом
// вывести крестик - по нажатию на который студент будет удален (удаляется как
// со страницы, так и с объекта), если был удален последний студент написать
// текстовое сообщение (“Студенты не найдены”)
// - Вывести статистику средних оценок в разрезе курса и статистику по количеству
// неактивных студентов в разрезе каждого курса и общее количество неактивных
// студентов
// - Добавить текстовое поле ввода - ввод имени студента, поле ввода для курса,
// оценки и checkbox для активности студента, по нажатии на кнопку “Добавить” -
// студент новый добавляется в список студентов

var students = [
    { name: 'Ivan Petrenko', estimate: 3.5, course: 4, active: false },
    { name: 'Regina Petrenko', estimate: 3.3, course: 4, active: false },
    { name: 'Sergii Sirenko', estimate: 4.2, course: 1, active: false },
    { name: 'Mariia Zirenko', estimate: 5, course: 1, active: true },
    { name: 'Andrii Kucherenko', estimate: 3.9, course: 2, active: true },
    { name: 'Maxim Kucher', estimate: 4.8, course: 2, active: true },
    { name: 'Antonina Gureeva', estimate: 3.4, course: 3, active: false },
    { name: 'Leonid Gurchenko', estimate: 4.1, course: 3, active: true },
    { name: 'Pavlo Shnurov', estimate: 4.9, course: 1, active: true }
];

var studentEstimatesSumm = 0;
var studentEstimatesSummInCourse = {};
var summStudentsInCourse = {};
var summActiveStudents = 0;
var summInactiveStudents = 0;
var summInactiveStudentsInCourses = {};
var averageStudentsEsimateInCourse = {};

function calculateStudentEstimatesSumm() {
    for (i = 0; i < students.length; i++) {
        var element = students[i];
        if (students[i].active) {
            studentEstimatesSumm += students[i].estimate;
        }
    }
}

function calculateSummActiveStudents() {
    for (i = 0; i < students.length; i++) {
        var element = students[i];
        if (students[i].active) {
            summActiveStudents++;
        }
    }
}

function calculateSummInactiveStudents() {
    for (i = 0; i < students.length; i++) {
        var element = students[i];
        if (!students[i].active) {
            summInactiveStudents++;
        }
    }
}

function calculateSummInactiveStudentsInCourses() {
    for (i = 0; i < students.length; i++) {
        var element = students[i];
        if (!element.active) {
            if (summInactiveStudentsInCourses['course' + element.course] === undefined) {
                summInactiveStudentsInCourses['course' + element.course] = 1;
            } else {
                summInactiveStudentsInCourses['course' + element.course]++;
            }
        }
        if (element.active && summInactiveStudentsInCourses['course' + element.course] === undefined) {
            summInactiveStudentsInCourses['course' + element.course] = 0;
        }
    }
}


function calculateSummStudentsInCourse() {
    for (i = 0; i < students.length; i++) {
        var element = students[i];
        if (summStudentsInCourse['course' + element.course] === undefined) {
            summStudentsInCourse['course' + element.course] = 1;
        } else {
            summStudentsInCourse['course' + element.course]++;
        }
    }
}

function calculateStudentEstimatesSummInCourse() {
    for (i = 0; i < students.length; i++) {
        var element = students[i];
        if (studentEstimatesSummInCourse['course' + element.course] === undefined) {
            studentEstimatesSummInCourse['course' + element.course] = element.estimate;
        } else {
            studentEstimatesSummInCourse['course' + element.course] += element.estimate;
        }
    }
}

function calculateAverageStudentsEsimateInCourse() {
    var summStudentsInCourseArray = Object.values(summStudentsInCourse);
    for (i = 1; i < summStudentsInCourseArray.length + 1; i++) {
        var quantityStudents = summStudentsInCourse['course' + i];
        var summEstimates = studentEstimatesSummInCourse['course' + i];
        var averageStudentsEsimate = summEstimates / quantityStudents;
        if (averageStudentsEsimateInCourse['course' + i] === undefined) {
            averageStudentsEsimateInCourse['course' + i] = averageStudentsEsimate;
        } else {
            studentEstimatesSummInCourse['course' + i] += averageStudentsEsimate;
        }
    }
}

calculateStudentEstimatesSumm();
calculateSummActiveStudents();
calculateSummInactiveStudents();
calculateSummInactiveStudentsInCourses();
calculateSummStudentsInCourse();
calculateStudentEstimatesSummInCourse();
calculateAverageStudentsEsimateInCourse();

var averageStudentsEsimate = studentEstimatesSumm / summActiveStudents;

console.log('Средняя оценка активных студентов: ' + averageStudentsEsimate);
console.log('Общее количество неактивных студентов: ' + summInactiveStudents);
console.log('Количество неактивных студентов на каждом курсе: ' + JSON.stringify(summInactiveStudentsInCourses));
console.log('Общее количество студентов на каждом курсе: ' + JSON.stringify(summStudentsInCourse));
console.log('Сумма оценок на каждом курсе: ' + JSON.stringify(studentEstimatesSummInCourse));
console.log('Средняя оценка студентов на каждом курсе: ' + JSON.stringify(averageStudentsEsimateInCourse));

function addQuantityA() {
    var num = document.getElementsByTagName('a').length;

    const p = document.createElement('p');

    p.innerHTML = 'Количество ссылок на странице: ' + num;

    document.querySelector('body').appendChild(p);
}

function addQuantityP() {
    var phrases = document.getElementsByClassName('phrase');
    let quantityPhrase = 0;
    for (i = 0; i < phrases.length; i++) {
        if (phrases[i].tagName === 'P') {
            quantityPhrase += 1;
        }
    }

    const p = document.createElement('p');

    p.innerHTML = 'Количество тегов “p” на странице которые имеют класс “phrase”  на странице: ' + quantityPhrase;

    document.querySelector('body').appendChild(p);
}

function addPhraseAverageEstimate() {
    const p = document.createElement('p');

    p.setAttribute('class', 'phrase');

    p.innerHTML = 'Статистика средних оценок в разрезе курса: ' + JSON.stringify(averageStudentsEsimateInCourse);

    document.querySelector('body').appendChild(p);
}

function addPhraseInactiveStudents() {
    const p = document.createElement('p');

    p.setAttribute('class', 'phrase');

    p.innerHTML = 'Статистика по количеству неактивных студентов в разрезе каждого курса: ' + JSON.stringify(summInactiveStudentsInCourses);

    document.querySelector('body').appendChild(p);
}

function addPhraseAllInactiveStudents() {
    const p = document.createElement('p');

    p.setAttribute('class', 'phrase');

    p.innerHTML = 'Общее количество неактивных студентов: ' + JSON.stringify(summInactiveStudents);

    document.querySelector('body').appendChild(p);
}

function renderStudents() {
    var ul = document.createElement('UL');
    for (let i = 0; i < students.length; i++) {
        var li = document.createElement('LI');
        li.innerHTML = '&#10006 ' + students[i].name;

        (function (i) {
            li.addEventListener('click', function (event) {
                students.splice(i, 1);
                renderStudents();
                let checkLi = document.getElementsByTagName('li').length;
                if (checkLi === 0) {
                    const p = document.createElement('p');

                    p.innerHTML = 'Студенты не найдены';

                    document.querySelector('ul').appendChild(p);
                }
            });
        })(i);
        ul.appendChild(li);
    }
    let list = document.querySelector('.list');
    list.innerHTML = '';
    list.appendChild(ul);
}

function addInputs() {
    let form = document.querySelector('.form');

    let labelName = document.createElement('LABEL');
    labelName.innerHTML = 'ФИО студента: ';
    form.appendChild(labelName);

    let inputName = document.createElement('INPUT');
    form.appendChild(inputName);

    let labelCourse = document.createElement('LABEL');
    labelCourse.innerHTML = 'Курс: ';
    form.appendChild(labelCourse);

    let inputCourse = document.createElement('INPUT');
    form.appendChild(inputCourse);

    let labelEstimate = document.createElement('LABEL');
    labelEstimate.innerHTML = 'Оценка: ';
    form.appendChild(labelEstimate);

    let inputEstimate = document.createElement('INPUT');
    form.appendChild(inputEstimate);

    let labelCheckbox = document.createElement('LABEL');
    labelCheckbox.innerHTML = 'Студент активен ';
    form.appendChild(labelCheckbox);

    let inputCheckbox = document.createElement('INPUT');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.setAttribute('id', 'checkbox');
    form.appendChild(inputCheckbox);

    let inputButton = document.createElement('INPUT');
    inputButton.setAttribute('class', 'button');
    inputButton.type = 'button';
    inputButton.value = 'Добавить студента';
    form.appendChild(inputButton);
}

function addedNewStudents() {
    let button = document.querySelector('.button');

    button.addEventListener('click', event => {

        let inputValueName = document.getElementsByTagName('input')[0].value;

        let inputValueCourse = document.getElementsByTagName('input')[1].value;

        let inputValueEstimate = document.getElementsByTagName('input')[2].value;

        var checkedCheckbox = document.getElementById('checkbox').checked;

        let newStudent = { name: inputValueName, estimate: inputValueEstimate, course: inputValueCourse, active: checkedCheckbox };

        students.push(newStudent);

        console.log(students);

        renderStudents();
    });
}

window.onload = function () {
    addPhraseAverageEstimate();
    addPhraseInactiveStudents();
    addPhraseAllInactiveStudents();
    renderStudents();
    addInputs();
    addedNewStudents();
    addQuantityA();
    addQuantityP();
};
