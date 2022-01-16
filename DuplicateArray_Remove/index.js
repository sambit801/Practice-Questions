// Create a function 
function removeEle(arr){
 //Declare a variable
 let j=0; 
 //assign an empty array which store in temp variable
let temp=[];
// Use for loop
for(let i=0;i<=arr.length-1;i++){
  //Check condition whether first index match with next index or not
  if(arr[i] != arr[i+1]){
    //if not match condition satisfied then it will store that index in empty array
    console.log(temp.push(arr[i]));
    //then it will increment and again go to for loop
    j++;
  }
}

temp[j] = arr[arr.length-1];
}
// invoke the function with argument beacuse without function call program can't be execute.
removeEle([1,2,2,3,3,4,4,5]);
