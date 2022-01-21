var arr=[1,2,3,6,4];

const findSecondLarge=()=>{
  
  var high=0;
  var secondLarge=0;
  
  for(var i=0;i<arr.length;i++){
    if(arr[i]>high){
      secondLarge=high;
      high=arr[i];
    }else if(arr[i]>secondLarge){
      secondLarge=arr[i];
    }
  }
  console.log(secondLarge);
}
findSecondLarge();
