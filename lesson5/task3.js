// Задан массив объектов студентов вида [{name: “Ivan”, estimate: 4, course: 1,
// active: true},{name: “Ivan”, estimate: 3, course: 1, active: true},{name: “Ivan”,
// estimate: 2, course: 4, active: false},{name: “Ivan”, estimate: 5, course: 2, active:
// true}] - заполнить его более большим количеством студентов. Написать
// функцию которая возвращает: среднюю оценку студентов в разрезе каждого
// курса: {1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5} с учетом только тех студентов которые
// активны. Посчитать количество неактивных студентов в разрезе каждого курса
// и общее количество неактивных студентов.

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
var summActiveStudents = 0;
var summInactiveStudents = 0;
var summInactiveStudentsInCourses = {};

for (i = 0; i < students.length; i++) {
    var element = students[i];
    if (students[i].active) {
        studentEstimatesSumm += students[i].estimate;
    }
}

for (i = 0; i < students.length; i++) {
    var element = students[i];
    if (students[i].active) {
        summActiveStudents++;
    }
}

for (i = 0; i < students.length; i++) {
    var element = students[i];
    if (!students[i].active) {
        summInactiveStudents++;
    }
}

for (i = 0; i < students.length; i++) {
    var element = students[i];
    if (!element.active) {
        if (summInactiveStudentsInCourses['course ' + element.course] === undefined) {
            summInactiveStudentsInCourses['course ' + element.course] = 1;
        } else {
            summInactiveStudentsInCourses['course ' + element.course]++;
        }
    }
    if (element.active && summInactiveStudentsInCourses['course ' + element.course] === undefined) {
        summInactiveStudentsInCourses['course ' + element.course] = 0;
    }
}

var averageStudentsEsimate = studentEstimatesSumm / summActiveStudents;

console.log('Средняя оценка активных студентов: ' + averageStudentsEsimate);
console.log('Общее количество неактивных студентов: ' + summInactiveStudents);
console.log('Количество неактивных студентов на каждом курсе: ' + JSON.stringify(summInactiveStudentsInCourses));
