const getStudents = async () => {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText)
            }
        };
        xhttp.open("GET", "http://localhost:8000/", true);
        xhttp.send();
    })
}

const setStudents = async () => {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve();
            }
        };

        xhttp.open("POST", "http://localhost:8000/", true);
        xhttp.send(JSON.stringify(students));
    })
}

window.globalAPI = {
    getStudents: getStudents,
    setStudents: setStudents,
}