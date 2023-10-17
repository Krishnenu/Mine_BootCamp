const arr = [5, 5, 5, 5, 5];

function miniMaxSum(arr) {
  let max_sum = 0;
  let min_sum = 0;
  let max = arr[0];
  let min = arr[0];
  let min_num_count = 0;
  let max_num_count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (max < arr[j]) {
      max = arr[j];
    }
    if (min > arr[j]) {
      min = arr[j];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] != max && max_num_count <= arr.length - 2) || (max === min && max_num_count <= arr.length - 2 )) {
      min_sum = arr[i] + min_sum;
      max_num_count++;
    }
    if ((arr[i] != min && min_num_count <= arr.length - 2) || (max === min && min_num_count <= arr.length - 2)) {
      max_sum = arr[i] + max_sum;
      min_num_count++;
    }
  }

  console.log(`${min_sum} ${max_sum}`);
}

miniMaxSum(arr);
