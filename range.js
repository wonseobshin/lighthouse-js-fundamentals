function range(start, end, step){
  let i = start;
//  let j = 0;
  let array = [];
  if(start === undefined || end === undefined || step === undefined || end < start || step < 0){
    return array;
  }
  while(i <= end){
    array.push(i);
    i = i + step;
//    j++;
  }
  return array;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));