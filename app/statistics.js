module.exports=function getStatistics(numbers){
   
    let sum=0;
    let min=0;
    let max=0;
   let obj={
         min:0,
         max:0,
         average:0
   };
    //implement the computation of statistics here
    for(let i=0;i<numbers.length;i++){
      sum=sum+numbers[i];
      if(numbers[i]<min){
        min=numbers[i];
      }
       if(numbers[i]>max){
       max=numbers[i];
       }
    }
    obj.average=sum/numbers.length;
    obj.min=min;
    obj.max=max;
    return obj;
}

