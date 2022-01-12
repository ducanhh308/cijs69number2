var array1 =[1,2,"a"];
var array2 =[1,3,"b"];

function getArrayNotMatch(array1,array2){
     var totalArray1 = []
     var totalArray2 = []
     
   totalArray1 = array1.filter(function(arr){
          return array2.includes(arr) === false  ;
     }) 
   totalArray2 = array2.filter(function(arr){
        return array1.includes(arr) === false ;
   })  
     return totalArray = totalArray1.concat(totalArray2)
}
console.log(getArrayNotMatch(array1,array2))