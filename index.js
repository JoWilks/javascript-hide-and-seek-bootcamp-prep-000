function getFirstSelector(selector) {
   return document.querySelector(selector);
}

function nestedTarget() {
  //Define a function nestedTarget() that pulls a .target out of #nested
   var target = document.querySelectorAll('#nested .target');
  for (let i = 0; i < target.length; i++) {
  target[i] = (i + 1).toString()
}
  
}