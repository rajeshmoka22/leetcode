const arr = [15,5,1,8,2,6,3,4,11,7,24];
                   
function mergeSort(arr, low, high){
  if(low < high){
    const mid = Math.floor((low+high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    performMerge(arr, low, mid, high);
  }
}

function performMerge(arr, low, mid, high){
  let left = arr.slice(low, mid+1), right = arr.slice(mid+1, high+1);
  let i=j=0,k=low;
  while(i<left.length && j<right.length){
    if(left[i]<right[j]){
      arr[k]=left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while(i<left.length){
    arr[k]=left[i];
    i++;
    k++;
  }
  while(j<right.length){
    arr[k]=right[j];
    j++;
    k++;
  }
}

mergeSort(arr, 0, arr.length-1);
console.log(arr);