;(()=> {
  let arr = [];

for (let i = 0; i < 5; i++) {
  arr[i] = [];
  for (let j = 0; j < 5; j++) {
    arr[i][j] = Math.round(Math.random() * 10);
  }
}

console.log(arr);
})()