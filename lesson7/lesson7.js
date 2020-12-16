// Урок седьмой
// - При каждом действии удаления или добавления студентов нужно
// пересчитывать статистику средней оценки в разрезе каждого курса и подсчета
// количества неактивных студентов и изменять соответствующее содержимое.
// - В ряде предыдущих заданий - выделять красным цветом тех студентов которые
// имеют оценку 3 и менее. которые от 3 до 4 - желтым и которые 4 и выше -
// зеленым.
// - Аналогично как в предыдущем задании этого урока отмечать фоновым цветом
// вывод статистики в разрезе каждого курса касательно средней оценки
// - Добавить для каждого студента иконку по нажатию на которую студент
// переводится в статус неактивный из активного и наоборот - при этом для двух
// состояний иконки тоже должны быть разными и изменять
// - По нажатие на имя студента - удалять имя, вместо имени показывать форму
// ввода - по нажатию на ENTER сохранять новое имя для этого студента, удалять
// форму ввода и выводить в списке новое имя студента
// - По аналогии предыдущего пункта сделать тоже самое с номером курса и с
// оценкой студента. Не забыть что при изменении оценки статистика также
// должна быть пересчитана и выведена новая статистика.

var students = [
    { name: 'Sergii Sirenko', estimate: 4.2, course: 1, active: false, email: 'sergiisirenko@gmail.com', date: 'Wed Dec 16 2020 09:17' },
    { name: 'Mariia Zirenko', estimate: 5, course: 1, active: true, email: 'mariiazirenko@gmail.com', date: 'Wed Dec 16 2020 10:18' },
    { name: 'Pavlo Shnurov', estimate: 4.9, course: 1, active: true, email: 'pavloshnurov@gmail.com', date: 'Wed Dec 16 2020 11:19' },
    { name: 'Andrii Kucherenko', estimate: 3.9, course: 2, active: true, email: 'andriikucherenko@gmail.com', date: 'Wed Dec 16 2020 12:20' },
    { name: 'Maxim Kucher', estimate: 4.8, course: 2, active: true, email: 'maximkucher@gmail.com', date: 'Wed Dec 16 2020 13:21' },
    { name: 'Antonina Gureeva', estimate: 3.4, course: 3, active: false, email: 'antoninagureeva@gmail.com', date: 'Wed Dec 16 2020 14:22' },
    { name: 'Leonid Gurchenko', estimate: 4.1, course: 3, active: true, email: 'leonidgurchenko@gmail.com', date: 'Wed Dec 16 2020 15:23' },
    { name: 'Ivan Petrenko', estimate: 3.5, course: 4, active: false, email: 'ivanpetrenko@gmail.com', date: 'Wed Dec 16 2020 16:24' },
    { name: 'Regina Petrenko', estimate: 2.8, course: 4, active: false, email: 'reginapetrenko@gmail.com', date: 'Wed Dec 16 2020 17:25' }
];

var studentEstimatesSumm = 0;
var studentEstimatesSummInCourse = {};
var summStudentsInCourse = {};
var summActiveStudents = 0;
var summInactiveStudents = 0;
var summInactiveStudentsInCourses = {};
var averageStudentsEstimateInCourse = {};

function clear() {
    studentEstimatesSumm = 0;
    studentEstimatesSummInCourse = {};
    summStudentsInCourse = {};
    summActiveStudents = 0;
    summInactiveStudents = 0;
    summInactiveStudentsInCourses = {};
    averageStudentsEstimateInCourse = {};
    calculateSummStudentsInCourse();
    calculateStudentEstimatesSummInCourse();
}

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

function calculateAverageStudentsEstimateInCourse() {
    var summStudentsInCourseArray = Object.values(summStudentsInCourse);
    for (i = 1; i < summStudentsInCourseArray.length + 1; i++) {
        var quantityStudents = summStudentsInCourse['course' + i];
        var summEstimates = studentEstimatesSummInCourse['course' + i];
        var averageStudentsEstimate = summEstimates / quantityStudents;
        if (averageStudentsEstimateInCourse['course' + i] === undefined) {
            averageStudentsEstimateInCourse['course' + i] = averageStudentsEstimate;
        } else {
            studentEstimatesSummInCourse['course' + i] += averageStudentsEstimate;
        }
    }
}

calculateStudentEstimatesSumm();
calculateSummActiveStudents();
calculateSummInactiveStudents();
calculateSummInactiveStudentsInCourses();
calculateSummStudentsInCourse();
calculateStudentEstimatesSummInCourse();
calculateAverageStudentsEstimateInCourse();

var averageStudentsEsimate = studentEstimatesSumm / summActiveStudents;

function isValidEmail(email) {
    let result = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
    console.log(result);
    return result;
}

function isValidCourse(course) {
    let result = /^[1-5]$/.test(course);
    console.log(result);
    return result;
}

function isValidName(name) {
    let result = /^[a-zA-Z]{1,15}\s[a-zA-Z]{1,15}$/.test(name);
    console.log(result);
    return result;
}

function addTableAverageEstimate() {
    let averageEstimate = Object.values(averageStudentsEstimateInCourse);
    let table = document.createElement('TABLE');
    for (let i = 0; i < averageEstimate.length; i++) {

        let tr = document.createElement('TR');
        let td = document.createElement('TD');

        tr.innerHTML = `Средняя оценка на ${i + 1} курсе`;
        td.innerHTML = averageEstimate[i];

        if (averageEstimate[i] > 4) {
            tr.setAttribute('id', 'greenBackground');
        }

        if (averageEstimate[i] <= 4 && averageEstimate[i] >= 3) {
            tr.setAttribute('id', 'yellowBackground');
        }

        if (averageEstimate[i] < 3) {
            tr.setAttribute('id', 'redBackground');
        }
        table.appendChild(tr);
        tr.appendChild(td);
    }
    let list = document.querySelector('.courseAverage');
    list.innerHTML = '';
    list.appendChild(table);
}

function addTableInActiveStudents() {
    let summStudents = Object.values(summInactiveStudentsInCourses);
    let table = document.createElement('TABLE');
    for (let i = 0; i < summStudents.length; i++) {

        let tr = document.createElement('TR');
        let td = document.createElement('TD');

        tr.innerHTML = `Количество неактивных студентов на ${i + 1} курсе - `;
        td.innerHTML = summStudents[i];

        table.appendChild(tr);
        tr.appendChild(td);
    }
    let list = document.querySelector('.courseInActiveStudents');
    list.innerHTML = '';
    list.appendChild(table);
}

function addPhraseAllInactiveStudents() {
    const p = document.createElement('p');

    p.setAttribute('class', 'phrase');

    p.innerHTML = 'Общее количество неактивных студентов: ' + JSON.stringify(summInactiveStudents);

    document.querySelector('body').appendChild(p);
}

function renderStudents() {
    let table = document.createElement('TABLE');
    for (let i = 0; i < students.length; i++) {

        let tr = document.createElement('TR');
        let tdForName = document.createElement('TD');
        let name = document.createElement('P');
        name.setAttribute('id', 'pInTd');
        name.innerHTML = students[i].name;

        let tdForEstimate = document.createElement('TD');
        let estimate = document.createElement('P');
        estimate.setAttribute('id', 'pInTd');
        estimate.innerHTML = students[i].estimate;

        let tdForCourse = document.createElement('TD');
        let course = document.createElement('P');
        course.setAttribute('id', 'pInTd');
        course.innerHTML = students[i].course;

        let tdForEmail = document.createElement('TD');
        let email = document.createElement('P');
        email.setAttribute('id', 'pInTd');
        email.innerHTML = students[i].email;

        let tdForDate = document.createElement('TD');
        let date = document.createElement('P');
        date.setAttribute('id', 'pInTd');
        date.innerHTML = students[i].date;

        let iconPlus = document.createElement("IMG");
        iconPlus.setAttribute("width", "20");
        iconPlus.setAttribute("height", "20");

        if (students[i].active) {
            iconPlus.setAttribute("src", "plus.png");
        } else {
            iconPlus.setAttribute("src", "minuss.png");
        }

        let iconCross = document.createElement("IMG");
        iconCross.setAttribute("src", "cross.png");
        iconCross.setAttribute("width", "20");
        iconCross.setAttribute("height", "20");

        if (students[i].estimate > 4) {
            tr.setAttribute('id', 'greenBackground');
        }

        if (students[i].estimate <= 4 && students[i].estimate >= 3) {
            tr.setAttribute('id', 'yellowBackground');
        }

        if (students[i].estimate < 3) {
            tr.setAttribute('id', 'redBackground');
        }

        (function (i) {
            iconCross.addEventListener('click', function (event) {
                students.splice(i, 1);
                renderStudents();

                clear();

                calculateSummInactiveStudentsInCourses();
                calculateAverageStudentsEstimateInCourse();

                addTableAverageEstimate();
                addTableInActiveStudents();

                let checkStudents = document.getElementsByTagName('td').length;
                if (checkStudents === 0) {
                    const p = document.createElement('p');

                    p.innerHTML = 'Студенты не найдены';

                    document.querySelector('table').appendChild(p);
                }
            });
        })(i);

        (function (i) {
            iconPlus.addEventListener('click', function (event) {

                if (students[i].active) {
                    students[i].active = false;
                    iconPlus.setAttribute("src", "minuss.png");
                } else {
                    students[i].active = true;
                    iconPlus.setAttribute("src", "plus.png");
                }

                clear();

                calculateSummInactiveStudentsInCourses();
                calculateAverageStudentsEstimateInCourse();

                addTableAverageEstimate();
                addTableInActiveStudents();
            });
        })(i);

        (function (i) {
            name.addEventListener('click', function (event) {
                name.innerHTML = '';

                let inputName = document.createElement('INPUT');

                tdForName.appendChild(inputName);

                inputName.setAttribute('id', 'inputName');

                (function (i) {
                    inputName.addEventListener('keyup', function (event) {
                        if (event.keyCode === 13) {
                            let newName = document.getElementsByTagName('input')[0].value;
                            students[i].name = newName;

                            let resultValidation = isValidName(newName);

                            if (resultValidation) {
                                name.innerHTML = `${newName}`;

                                clear();

                                calculateSummInactiveStudentsInCourses();
                                calculateAverageStudentsEstimateInCourse();

                                renderStudents();
                                addTableAverageEstimate();
                                addTableInActiveStudents();
                            } else {
                                name.innerHTML = 'Введите имя и фамилию латинскими буквами через пробел';
                            }

                            inputName.setAttribute('id', 'invisible');
                        }
                    });
                })(i);
            });
        })(i);

        (function (i) {
            estimate.addEventListener('click', function (event) {
                estimate.innerHTML = '';

                let inputName = document.createElement('INPUT');

                tdForEstimate.appendChild(inputName);

                inputName.setAttribute('id', 'inputName');

                (function (i) {
                    inputName.addEventListener('keyup', function (event) {
                        if (event.keyCode === 13) {
                            let newName = document.getElementsByTagName('input')[0].value;
                            students[i].estimate = parseInt(newName);
                            estimate.innerHTML = `${newName}`;
                            inputName.setAttribute('id', 'invisible');
                            clear();

                            calculateSummInactiveStudentsInCourses();
                            calculateAverageStudentsEstimateInCourse();

                            renderStudents();
                            addTableAverageEstimate();
                            addTableInActiveStudents();
                        }
                    });
                })(i);
            });
        })(i);

        (function (i) {
            course.addEventListener('click', function (event) {
                course.innerHTML = '';

                let inputCourse = document.createElement('INPUT');

                tdForCourse.appendChild(inputCourse);

                inputCourse.setAttribute('id', 'inputCourse');

                (function (i) {
                    inputCourse.addEventListener('keyup', function (event) {
                        if (event.keyCode === 13) {
                            let newCourse = document.getElementsByTagName('input')[0].value;
                            students[i].course = parseInt(newCourse);

                            let resultValidation = isValidCourse(newCourse);

                            if (resultValidation) {
                                course.innerHTML = `${newCourse}`;

                                clear();

                                calculateSummInactiveStudentsInCourses();
                                calculateAverageStudentsEstimateInCourse();

                                renderStudents();
                                addTableAverageEstimate();
                                addTableInActiveStudents();
                            } else {
                                course.innerHTML = 'Введите число от 1 до 5';
                            }

                            inputCourse.setAttribute('id', 'invisible');
                        }
                    });
                })(i);
            });
        })(i);

        (function (i) {
            email.addEventListener('click', function (event) {
                email.innerHTML = '';

                let inputEmail = document.createElement('INPUT');

                tdForEmail.appendChild(inputEmail);

                inputEmail.setAttribute('id', 'inputEmail');

                (function (i) {
                    inputEmail.addEventListener('keyup', function (event) {
                        if (event.keyCode === 13) {
                            let newEmail = document.getElementsByTagName('input')[0].value;
                            students[i].email = newEmail;

                            let resultValidation = isValidEmail(newEmail);

                            if (resultValidation) {
                                email.innerHTML = `${newEmail}`;
                                clear();

                                calculateSummInactiveStudentsInCourses();
                                calculateAverageStudentsEstimateInCourse();

                                renderStudents();
                                addTableAverageEstimate();
                                addTableInActiveStudents();
                            } else {
                                email.innerHTML = 'Неверный формат e-mail';
                            }

                            inputEmail.setAttribute('id', 'invisible');
                        }
                    });
                })(i);
            });
        })(i);

        table.appendChild(tr);

        tr.appendChild(iconCross);

        tr.appendChild(tdForName);

        tdForName.appendChild(name);

        tr.appendChild(tdForEstimate);

        tdForEstimate.appendChild(estimate);

        tr.appendChild(tdForCourse);

        tdForCourse.appendChild(course);

        tr.appendChild(tdForEmail);

        tdForEmail.appendChild(email);

        tr.appendChild(tdForDate);

        tdForDate.appendChild(date);

        tr.appendChild(iconPlus);
    }
    let list = document.querySelector('.listStudents');
    list.innerHTML = '';
    list.appendChild(table);
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

        let resultValidationName = isValidName(inputValueName);

        let resultValidationCourse = isValidCourse(inputValueCourse);

        let resultValidationEstimate = isValidCourse(inputValueEstimate);

        if (resultValidationName && resultValidationCourse && resultValidationEstimate) {
            let newStudent = {
                name: inputValueName, estimate: parseInt(inputValueEstimate),
                course: parseInt(inputValueCourse), active: checkedCheckbox,
                email: '', date: new Date()
            };

            students.push(newStudent);

            console.log(students);

            clear();

            calculateSummInactiveStudentsInCourses();
            calculateAverageStudentsEstimateInCourse();

            renderStudents();
            addTableAverageEstimate();
            addTableInActiveStudents();
        } else {
            if (!resultValidationName) {
                alert('Введите имя и фамилию латинскими буквами через пробел');
            }

            if (!resultValidationCourse) {
                alert('Введите курс одним числом от 1 до 5');
            }

            if (!resultValidationEstimate) {
                alert('Введите оценку одним числом от 1 до 5');
            }
        }
    });
}

window.onload = function () {
    renderStudents();
    addInputs();
    addedNewStudents();
    addTableAverageEstimate();
    addTableInActiveStudents();
};
