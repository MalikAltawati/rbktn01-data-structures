var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

//var storage = {}
var queueMethods = {};
queueMethods.dequeue = dequeue;
queueMethods.enqueue  = enqueue ;
queueMethods.size = size;
queueMethods.storage = {}

return queueMethods ;

};
var enqueue  = function(value) {
	 this.storage[value] = value ;
}
var dequeue = function () {
	var counter = 0
    var temp ;
    for (var key in this.storage){

      if (counter === 0){
        temp = this.storage[key]
        delete this.storage[key]
        return temp
	  }
	}
}

var size = function() {
	if(Object.keys(this.storage).length === 0){
		return 0;
	}
	return Object.keys(this.storage).length
}

var person = Queue()

