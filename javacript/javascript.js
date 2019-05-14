var objData = data;

// console.log(objData);

// var k = 0;
// function printValues(obj) {
//     for (var key in obj) {
//         if (typeof obj[key] === "object") {
//             printValues(obj[key]);
//         } else {
//             console.log(obj[key]);
//         }
//     }
// }

// printValues(objData);


function printElem(str,element){

    ret = str+" "+element.name + " "+element.size;
    console.log(ret);
    for(item of element.nodes){
      printElem(str+" "+element.name,item);
    }
}

printElem("",data);


// function printValues(prefix,obj) {
//     if(!obj.name) return;
//     prefix = prefix+" "+obj.name;
//     console.log(prefix+" "+obj.size);
//     for (var key in obj.nodes) {
//       if (typeof obj.nodes[key] === "object") {
//         printValues(prefix,obj.nodes[key]);
//       }
//     }       
//   }
  
//   printValues("",data);

function printValues(prefix,obj) {
    if (typeof obj !== "object") return;
    prefix = prefix?(prefix+" - "+obj.name) : obj.name;

    var node = document.createElement('P');
    var textnode = document.createTextNode(prefix+" "+obj.size);
    node.appendChild(textnode);
    document.getElementById('datas').appendChild(node);
    // document.getElementById('datas').append('<p>'++'</p>');
    for (var key in obj.nodes) {
        printValues(prefix,obj.nodes[key]);        
    }       
  }
  
  printValues("",data);


  const
    getItems = (parts = []) => ({ name, size, nodes = []}) => {
        console.log(`${parts.concat(name).join(' - ')} ${size}`)
        nodes.forEach(getItems(parts.concat(name)));
    };

    getItems()(data);


    function printValue(data, prefix = []) {
        //make a copy of the prefix instead of mutating it
        let location = prefix.concat(data.name);
        console.log(location.join(" - "), data.size);
        // var node = document.createElement('P');
        // var textnode = document.createTextNode(location.join(" - "), data.size);
        // node.appendChild(textnode);
        // document.getElementById('datas').appendChild(node);
      
        data.nodes.forEach(child => printValue(child, location))
      }
      
      printValue(data)