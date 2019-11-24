var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {}
  	obj.storage = {}
  	obj.i = 0
  	_.extend(obj,queueMethods)
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.storage[this.i] = value
	this.i++

}

queueMethods.dequeue = function(){
	var del; 
	for (var key in this.storage){
		del = this.storage[key]
		delete this.storage[key]
		break
	}
	return del;
}
queueMethods.size = function(){
	if ((Object.keys(this.storage).length)===0){
		return 0;
	}else{
		return Object.keys(this.storage).length;
	}

}

