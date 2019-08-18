/* 
        *
        **
        ***
        ****
        *****
*/
for(let i = 1; i<=5;i++){
     result = "";
    for(let j =1; j<=5;j++){
        
        if(i>=j){
            result += "*"
        }else{
            result += ""
        }
    }
    console.log(result)
}
console.log('--------------------------------------------')
/*      *****
         ****
          ***
           **
            *
*/
for(let i = 0; i<=5;i++){
    result = "";
   for(let j =0; j<=5;j++){
       
       if(i<=j){
           result += "*"
       }else{
           result += " "
       }
   }
   console.log(result)
}
console.log('--------------------------------------------')

