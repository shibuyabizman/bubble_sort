function bubble_sort(arr) {
    for (var i=0; i<arr.length-1; i++) {
        for (var j=1; j<arr.length - i + 1; j++) {
            if (arr[j] < arr[j-1]) {
                var tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmp;
            }
        }
    }
}

arr = [9, 8, 7, 6, 5];

console.log(arr);

bubble_sort(arr);

console.log(arr);
