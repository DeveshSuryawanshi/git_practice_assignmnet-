let N = 13;

function checkPrime(N) {
  for (let i = 0; i < N; i++) {
    if (i % N == 0) {
      count = 0;
    }
  }
  if (count == 2) {
    console.log("Given Number is Prime");
  } else {
    console.log("Given Number is not Prime");
  }
}

checkPrime();