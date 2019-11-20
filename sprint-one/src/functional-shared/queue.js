var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

//var storage = {}
var obj = {};
obj.storage = {}

extend(obj, queueMethods)
return obj;

};

var extend = function(obj, methods) {
	for(var key in methods){
		obj[key] = methods[key]
	}
}

var queueMethods = {
enqueue  : function(value) {
	 this.storage[value] = value ;
},
dequeue : function () {
	var counter = 0
    var temp ;
    for (var key in this.storage){

      if (counter === 0){
        temp = this.storage[key]
        delete this.storage[key]
        return temp
	  }
	}
},
size : function() {
	if(Object.keys(this.storage).length === 0){
		return 0;
	}
	return Object.keys(this.storage).length
 }
}
