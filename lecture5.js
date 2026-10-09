const prompt = require('prompt-sync')();


  let arr = Array

function removeEven(arr){
      let element = arr.filter(element => element % 2 !== 0);
    if(element % 2 === 0){
        return
    }
    else{
        return element;
    }
}
console.log(removeEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) );



function removeDuplicates(arr){
    let set = new Set(arr)
    return set
}
             console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9]))


function checkNum(arr, num){
    for(let i = 0; i<arr.length; i++) if(arr[i] == num) return true
    return false
}
             console.log(checkNum([1, 2, 3, 4, 5, 6], 5))




function arrMaps(arr){
    let map = new Map()
    for(let i = 0; i<arr.length; i++){
        map.set(arr[i], String.fromCharCode(arr[i]))
        const charCode = str.charCodeAt(i);
        if(charCode >= 97 && charCode <= 122 ){
    }
    return map
}
}
             console.log([118, 117, 120])









