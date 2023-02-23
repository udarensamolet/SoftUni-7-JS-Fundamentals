function addAndSubtract(input) {
  let sumOriginalArray = 0;
  let sumModifiedArray = 0;
  let line = "";
  for (let i = 0; i < input.length; i++) {
    sumOriginalArray += input[i];
    if (input[i] % 2 == 0) {
      input[i] += i;
    } else {
      input[i] -= i;
    }
    sumModifiedArray += input[i];

    if (i == 0) {
      line += `[ ${input[i]}, `;
    } else if (i == input.length - 1) {
      line += `${input[i]} ]`;
    } else {
      line += `${input[i]}, `;
    }
  }
  console.log(line);
  console.log(sumOriginalArray);
  console.log(sumModifiedArray);
}