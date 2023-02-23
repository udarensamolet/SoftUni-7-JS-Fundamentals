function sortNumbers(a, b, c) {
  let first = 0;
  let second = 0;
  let third = 0;

  if (a > b) {
    if (a > c) {
      first = a;
      if (b > c) {
        second = b;
        third = c;
      } else {
        second = c;
        third = b;
      }
    } else {
      first = c;
      second = a;
      third = b;
    }
  } else {
    if (b > c) {
      first = b;
      if (a > c) {
        second = a;
        third = c;
      } else {
        second = c;
        third = a;
      }
    } else {
      first = c;
      second = b;
      third = a;
    }
  }
  console.log(first);
  console.log(second);
  console.log(third);
}