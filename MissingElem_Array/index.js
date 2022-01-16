//Find missing number from an array

//Create a function

function missingNum(arr){

  var n = arr.length;

  var x=n+1;

  //sn=n(n+1)/2 formula applied

  var sum1=x*(x+1)/2;

  var sum2=0;

  //apply for loop

  for( var i=0; i<n;i++){

    //Sa=1+2+3+5 sum of array elements

    sum2 += arr[i];

  }

  //difference between length of array(4)-sum of total elements (11)

  console.log(sum1-sum2);

  

}

//invoke function

missingNum([1,2,3,5]);
