function getFirstSelector(selector) {
   return document.querySelector(selector);
}

function nestedTarget() {
  //Define a function nestedTarget() that pulls a .target out of #nested
  var target = document.getElementById('nested').querySelectorAll('.target');
  return target[0];
}

function deepestChild() {
    //search for most deeply nested child from div#grand-node
    var list = document.getElementById('grand-node').querySelectorAll('div');
    return list[list.length - 1]
}


function increaseRankBy(n) {
  var allList = document.querySelectorAll('.ranked-list')
  for (let i=0; i<allList.length; i++) {
    allList[i].innerHTML = parseInt(allList[i]) + n; }
 }


