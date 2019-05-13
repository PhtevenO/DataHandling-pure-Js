var objData = data;

// console.log(objData);

var k = 0;
function printValues(obj) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            printValues(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}

printValues(objData);

