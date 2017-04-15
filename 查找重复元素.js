/*
*找出数组 arr 中重复出现过的元素 
输入例子:
duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort()
输出例子:
[1, 3, 4]
*/
function duplicates(arr) {
   var repeat = [];
    arr.sort();
   for(var i=0;i<arr.length;i++){
       if(arr[i]==arr[i+1]){
           if(repeat.indexOf(arr[i])==-1)repeat.push(arr[i]);
       }
   };
    
    return repeat;
}