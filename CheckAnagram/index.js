function anagramCheck(str1,str2){
  
 let len1=str1.length;
 let len2=str2.length;
 
 if(len1 !== len2){
   console.log('Invalid string');
   return
 }
 
  let s1=str1.split('').sort().join('');
  let s2=str2.split('').sort().join('');
  
  if(s1===s2){
    console.log('True');
  }else{
    console.log('False');
  }
}
anagramCheck('hello','lehol');
