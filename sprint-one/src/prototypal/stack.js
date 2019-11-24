var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods)
  obj.storage = {};
  obj.i = 0;
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){

	this.storage[this.i] = value
	this.i++

}
stackMethods.pop = function(){
	var last = Object.keys(this.storage).length-1
	var pointer = 0
	var del;

	for( var key in this.storage){
		if( pointer === last){
			del = this.storage[key]
			delete this.storage[key]
		}
		pointer++
	}
	return del
}

stackMethods.size = function(){
	if( Object.keys(this.storage).length === 0){
		return 0;
	}else {
		return Object.keys(this.storage).length;
	}
}


