// TASK 1
function chessBoardRun(taskNumber) {
    const formData = document.form1.elements;

    const result = drawBoard(formData[0].value, formData[1].value, formData[2].value);

    if (!result.status) {
        // Note console log removed the first space in string,
        // and board will be shifted, so added additional space before result
        console.log(` ${result}`);
    } else {
        onError(result.reason, taskNumber);
    }
}


// TASK 2
function runEnvelopes(taskNumber) {
    const formData = document.form2.elements;

    const env1 = {
        width: formData[0].value,
        height: formData[1].value,
    };

    const env2 = {
        width: formData[2].value,
        height: formData[3].value,
    };

    let result = envelopes(env1, env2);

    if (!result.status) {
        onSuccess(result, taskNumber);
    } else {
        onError(result.reason, taskNumber);
    }
}


// TASK 3
function runAreaOfTriangle(taskNumber) {
    const arrayOfTriangles = [];
    const triangles = document.querySelectorAll(".triangle");

    for (let i = 0; i < triangles.length; i++) {
        const sidesOfTriangle = triangles[i].querySelectorAll("input");

        const triangle = {
            name: `ABC${i+1}`,
            a: sidesOfTriangle[0].value,
            b: sidesOfTriangle[1].value,
            c: sidesOfTriangle[2].value,
        };

        arrayOfTriangles.push(triangle);
    }

    const result = getTriangleAreas(arrayOfTriangles);

    if (!result.status) {
        onSuccess(result.map(el => el.name).join(','), taskNumber);
    } else {
        onError(result.reason, taskNumber);
    }
}

function addTriangle() {
    const len = document.querySelectorAll(".triangle").length; // length collection of triangles
    const triangles = document.getElementById('triangles');
    const triangle = document.createElement('div');

    triangle.className = "triangle";
    triangle.innerHTML = `<span>Triangle ABC${len+1}: </span>`+
        '<input type="text" placeholder="side A">'+
        '<input type="text" placeholder="side B">'+
        '<input type="text" placeholder="side C">'+
        '<button type="button" onclick="deleteTriangle()">✖</button>';

    triangles.appendChild(triangle);
}

function deleteTriangle() {
    let triangles = document.querySelectorAll(".triangle");
    triangles[triangles.length-1].remove(triangles[triangles.length]);
}


// TASK 4
function runDefinePalindrome(taskNumber) {
    const formData = document.form4.elements[0].value;

    let result = getPalindrome(formData);

    if (!result.status) {
        onSuccess(result, taskNumber);
    } else {
        onError(result.reason, taskNumber);
    }
}


// TASK 5
function runTickets(taskNumber) {
    const formData = document.form5.elements;
    const result = getTicketsInfo(formData[0].value, formData[1].value);

    if (!result.status) {
        onSuccess(result, taskNumber);
    } else {
        onError(result.reason, taskNumber);
    }
}

// TASK 6
function runNumberSequence(taskNumber) {
    const formData = document.form6.elements;
    const result = getSequence(formData[0].value, formData[1].value);

    if (!result.status) {
        onSuccess(result, taskNumber);
    } else {
        onError(result.reason, taskNumber);
    }
}

// TASK 7
function runRangeFib(taskNumber) {
    const formData = document.form7.elements;
    const result = getFibonacciArray(formData[0].value, formData[1].value);

    if (!result.status){
        onSuccess(result, taskNumber);
    } else {
        onError(result.reason, taskNumber);
    }
}

function onSuccess(text, n) {
    document.querySelectorAll(".result")[n].innerHTML = `Результат: ${text}`;
    console.log(`Результат: ${text}`);
}

function onError(error, taskNumber) {
    console.log(error);

    document.querySelectorAll(".result")[taskNumber].style = "color:red";
    document.querySelectorAll(".result")[taskNumber].innerHTML = error;
    setTimeout(()=>{
        document.querySelectorAll(".result")[taskNumber].style = "color:black";
        document.querySelectorAll(".result")[taskNumber].innerHTML = "";
    },3000)
}
