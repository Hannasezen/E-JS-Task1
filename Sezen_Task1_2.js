;(()=> {
  let hor = parseInt(prompt('Input the width of the array', 5));
  let vert = parseInt(prompt('Input the height of the array', 5));

  function makeArray (vert, hor) {
    let arr = [];
    let num = 1;
    for (let i = 0; i < vert; i++) {
      arr[i] = new Array(hor)
    }
    for(let n = 0; n < vert; n++) {
      for (let i = n, j = n; j < hor - n; j++) {
        if (arr[i][j] === undefined) {
          arr[i][j] = num++;
        }         
      }
      for (let i = n + 1, j = hor - 1 - n; i < vert - n; i++) {
        if (arr[i][j] === undefined) {
          arr[i][j] = num++;
        } 
      }
      for (let i = vert - 1 - n, j = hor - 2 - n; j >= n; j--) {
        if (arr[i][j] === undefined) {
          arr[i][j] = num++;
        } 
      }      
      for (let i = vert - 2 - n, j = n; i > n; i--) {
        if (arr[i][j] === undefined) {
          arr[i][j] = num++;
        } 
      }
    }    
    return arr;
  }
  console.log(makeArray(vert, hor));
})()
