// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var stringify = '';
  // Check for primitives
  if (typeof(obj) === 'number') {
  	stringify += obj;
  } else if (typeof(obj) === 'boolean') {
  	stringify += obj;
  } else if (typeof(obj) === 'string') {
	return '"' + obj + '"';
  } else if (typeof(obj) === 'function') {
  	return null;
  } else if (obj === null) {
  	stringify += null;
  } else if (Array.isArray(obj)) {
  	for (var i = 0; i < obj.length; i++) {
  	  if (i === obj.length - 1) {
  	    stringify += stringifyJSON(obj[i]);
  	  } else {
  	  stringify += stringifyJSON(obj[i]) + ',';
  	  }
  	}
  	return '[' + stringify+ ']';
  } else if (typeof(obj) === 'object') {
  	for (key in obj) {
  	  if (typeof(obj[key]) === 'function') {
  	  	stringify += '';
  	  } else if (obj[key] === undefined) {
  	  	stringify += '';
  	  } else {
  	    stringify += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
  	  }
  	}
  	return '{' + stringify.slice(0,-1) + '}';
  }
  return stringify;
};

  // Check if number, boolean, or string
  // if number or boolean add to string
  // if string, convert to string
  // if array, convert to string array
  // if object, call function on self 
  //return final string


