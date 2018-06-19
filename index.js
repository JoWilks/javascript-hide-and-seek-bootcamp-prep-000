function getFirstSelector(selector) {
   return document.querySelector(selector);
}

function nestedTarget() {
  //Define a function nestedTarget() that pulls a .target out of #nested
  var target = document.getElementById('nested').querySelectorAll('.target');
  return target[0];
}

function increaseRankBy(n) {
  var allList = document.querySelectorAll('.ranked-list')
  for (let i=0; i<allList.length; i++) {
    parseInt(allList[i]) + n;
  }
}



function deepestChild() {
  
}
