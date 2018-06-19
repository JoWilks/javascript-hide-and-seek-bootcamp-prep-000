function getFirstSelector(selector) {
   return document.querySelector(selector);
}

function nestedTarget() {
  //Define a function nestedTarget() that pulls a .target out of #nested
   var target = document.querySelectorAll('#nested .target');
  for (let i = 0; i < target.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
}
  
}