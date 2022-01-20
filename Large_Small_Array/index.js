//Wap in JavaScript to findout largest and smallest elements from an array.
const arr = [2, 4, 9,1, 2, 16, 24]
// Create a function 
const findLarge= () =>{
  //Decalare 2 variables and assign 0 value
var largest = arr[0];
var smallest = arr[0];
// Use for loop to check from 0 to last index
for (var i = 0; i <= arr.length; i++) {
//Use if condition to findout largest element
  if (arr[i] > largest) {
    largest = arr[i];
    //Use condition to find out smallest element
  } else if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
//Print largest and smallest 
  console.log(largest);
  console.log(smallest);
}
//Call the function
findLarge();
