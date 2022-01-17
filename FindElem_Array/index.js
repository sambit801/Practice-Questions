// Find element is present in array or not??
// Useing indexOf() method inside arrow function

const findEle = () =>{



  var names=["thor","spiderman","thanos","groot","holk"];



  if(names.indexOf("spuperman") !== -1){

    console.log('yes,the element is present in an array');

  }else{

    console.log('No,the element is absent in an array');

  }

}

findEle();

//Using ForLoop write this program

findElem = () => {

  let arr=[1,2,3,4,5,6,7];

  let el=prompt('Enter num');

  let flag=0;

  for(let i=0;i<=arr.length;i++){

    if(el == arr[i]){

      flag=1;

      

    }

  }

  if(flag==1){

    console.log('present');

  }else{

    console.log('absent');

  }

}

findElem();
