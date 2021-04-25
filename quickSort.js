const arr = [15,5,1,8,2,6,3,4,11,7,24]

function sort(arr, low, high){
  if(low<high){
    const pivot = partition(arr,low,high);
    sort(arr, low, pivot-1);
    sort(arr, pivot+1, high);
  }
}

function partition(arr, low, high){
  pivot = arr[high];
  i=low-1;
  j=low;
  while(j<high){
    if(arr[j]<=pivot){
      i += 1;
      [arr[i],arr[j]] = [arr[j], arr[i]];
    }
    j +=1;
  }
  [arr[i+1],arr[high]] = [arr[high], arr[i+1]];
  return i+1;
}

sort(arr, 0, arr.length-1);
console.log(arr);