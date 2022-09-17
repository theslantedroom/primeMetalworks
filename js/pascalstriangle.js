/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  
    //make array of length numRows
    let rowsArray = [];
    
      //   make the rows - for loop - each iteration appends a row to rowsArray
      for (i = 0; i <= numRows-1; i++ ){
        let newRow = [i];
        newRow[0] = 1;
        newRow[i] = 1;
        rowsArray[i] = newRow;
      };
  
      // 1
      // 1,1
      // 1,1,1
      // 1,1,1,1
      // 1,1,1,1,1
  
      //   look at each row starting with 2nd
      for (j = 0; j <= numRows-1; j++){
        // calculate each number based on the previous row - first and last are always 1
        for (k = 0; k <= j; k++){
          //skip first iteration
          if (j >= 1){
            // skip first and last numbers
            if (k != 0 && k != j){
              rowsArray[j][k] = rowsArray[j-1][k] + rowsArray[j-1][k-1];
            }
          }
        };
      };
    updateHtml(rowsArray);
    return rowsArray;
  };
  
  // document.querySelector('div').style.fontSize = '15px';
  const updateHtml = (rowsArray) => {
    const title = document.querySelectorAll('h1')[0];
    title.innerText = 'Pascals Triangle Generator';
    printDiv(rowsArray);
  }
  
  function printDiv(content) {
    for (i=0; i <= content.length-1; i++){
      let newDiv = document.createElement("div");
      newDiv.innerText = content[i];
      newDiv.style.margin = "auto";
      document.getElementById('parent').appendChild(newDiv);    
    }
  }
  
  const generatebtn = () => {
    var parent = document.getElementById('parent');
    while ( parent.firstChild ) parent.removeChild( parent.firstChild );
    let rows = document.querySelector('#input').value
    generate(rows);
  }
  generate(5);
  