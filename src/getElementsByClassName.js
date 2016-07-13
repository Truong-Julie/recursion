// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// // But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodesbyClassName = [];
  var body = document.body;

  var hasClass = function(node) {
  // Check if node contains class
    if (node.classList) {
      if (node.classList.contains(className)) {
        nodesbyClassName.push(node);
      }
    }
    // Check children nodes recursively
    for (var j = 0; j < node.childNodes.length; j++) {
      hasClass(node.childNodes[j]);
    }
  };   
  // Call recursion on body
  hasClass(body);
  // return array
  return nodesbyClassName;
};

//should use document.body, element.childNodes, elementclassList
