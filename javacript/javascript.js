var objData = data;

// console.log(objData);


function printValues(obj) {

    var initKey = 'size';
    var initName = obj['name'];
    
    for (var key in obj) {
        // console.log(key);
        // console.log(obj);
        var k = 0;
        
        if (typeof obj[key] === "object") {
            printValues(obj[key]);
            console.log(obj);
        } else {
            if (k > 0){
                console.log(initName = obj['name'] + ' - ' + obj['size']);
                k++;
            } else {
                console.log(initName = obj['name'] + ' ' + obj['size']);
                k++;
            }
            
         
            // console.log(obj[key]);
           
        }
        
    }
}

printValues(objData);

