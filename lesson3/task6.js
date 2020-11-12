var array = [
    [6, 3, 20, -20, 9],
    [0, 2, 0, -15, 2],
    [4, 1, 7, 0, 0],
];

function calculateMatrix() {
    var shift = 0;
    while (array[0].length - shift > 0) {
        var shoudNotBeDeleted = false;
        var summ = 0;
        for (var i = 0; i < array.length; i++) {
            var val = array[i][shift];
            summ += val;
            
            if(val === 0 && summ < 0){
                shoudNotBeDeleted = true;
            }
        }

        if(!shoudNotBeDeleted){
            for (var i = 0; i < array.length; i++) {
                array[i].splice(shift, 1)
            }
        }else{
            shift++;
        }
    }

    console.log(array)
}

calculateMatrix();
