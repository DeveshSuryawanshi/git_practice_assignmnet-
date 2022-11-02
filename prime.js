
let N = 13;
function checkPrime(N) {
  let count = 0;
  for (let i = 1; i<=N; i++) {
    if (N %i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log("Given Number is Prime");
  } else {
    console.log("Given Number is not Prime");
  }
}
checkPrime(N);

