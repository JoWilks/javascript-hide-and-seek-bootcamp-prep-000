function getFirstSelector(selector) {
   return document.querySelector(selector);
}

function nestedTarget() {
  //Define a function nestedTarget() that pulls a .target out of #nested
   var target = document.getElementById('nested').querySelectorAll('.target');
   console.log(target)
   return toString(target)
}