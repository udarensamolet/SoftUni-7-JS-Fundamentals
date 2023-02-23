function lastKNumbersSequence(n, k) {
    let arr = [];
    arr[0] = 1;

    while (arr.length < n) {
        let sum = 0;
        if (arr.length <= k){
            for (let i = arr.length - 1; i >= 0; i--) {
                sum += arr[i];
            }
        } else {
            let counter = 0;
            for (let i = arr.length - 1; i >= 0; i--) {
                counter++;
                if (counter <= k)
                {
                    sum += arr[i];
                } else {
                    break;
                }
            }
        }
        arr.push(sum);
    }
	console.log(`[${result.join(", ")}]`);
}