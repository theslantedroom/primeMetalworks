let listOriginal = ['three','six','one']; 
let listAdd =  ['one','two','five','six']
let listDelete = ['two','five'];


const combineList = function(listOriginal,listAdd,listDelete) {
  let merged = listOriginal.concat(listAdd); 
  let answer = [...new Set(merged)];
  answer = answer.filter( function(x) {
    return !listDelete.includes(x);
  } );
  
  document.getElementById('answer').innerText = `Combined list = [${answer}]`;
  return answer;
};




function printAnswer(content) {
  document.getElementById('answer').innerText = content;    
}


function printDiv(listOriginal,listAdd,listDelete) {
    let newDiv1 = document.createElement("div");
    let newDiv2 = document.createElement("div");
    let newDiv3 = document.createElement("div");
    newDiv1.innerText = `original list = [${listOriginal}]`;
    newDiv2.innerText = `Add to list = [${listAdd}]`;
    newDiv3.innerText = `Remove from list = [${listDelete}]`;
    document.getElementById('parent').appendChild(newDiv1);    
    document.getElementById('parent').appendChild(newDiv2);    
    document.getElementById('parent').appendChild(newDiv3);    
}


printDiv(listOriginal,listAdd,listDelete);


