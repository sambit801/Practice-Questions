
function mergeArrays(...arrays) { 

        let mergedArray = []; 
// Using forEach() 
        arrays.forEach(array=>{
// Concat all the arrays and then sort by ascending order
       mergedArray = mergedArray.concat(array).sort();
        });
        
        let result = mergedArray.filter(function(item,pos){
          return mergedArray.indexOf(item) == pos;
        });
        console.log(result); 
    }
    
   mergeArrays([1,2,4,5], [2,4,6,7,8],[5,8,6,5],[3,5,7,8]);
