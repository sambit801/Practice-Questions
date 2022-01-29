function mergeArrays(...arrays) { 

    
        let mergedArray = []; 

        arrays.forEach(array =>{

            mergedArray = mergedArray.concat(array).sort();

        });

 
        console.log(mergedArray); 

    }
    
   mergeArrays([1,2,4,5], [2,4,6,7,8],[5,8,6,5],[3,5,7,8]);
