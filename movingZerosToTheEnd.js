/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

move_zeros([false,1,0,1,2,0,1,3,"a"]) # returns[false,1,1,2,1,3,"a",0,0] */

var moveZeros = function (arr) {
  var new_arr = [];
  var count = 0;
  for(i=0; i<arr.length; i++){
    if(arr[i] !== 0){
      new_arr.push(arr[i]);
    }else{
      count++;
    }
  }
  for(i=0; i<count; i++){
    new_arr.push(0);
  }
  return new_arr;
}