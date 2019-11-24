var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.i = 0;
};


Stack.prototype.push = function(value){
	this.storage[this.i] = value;
	this.i++

}

Stack.prototype.pop = function(){
	var pointer = 0;
	var last = Object.keys(this.storage).length-1
	var del;
	for(var key in this.storage){
		if (pointer === last){
			del = this.storage[key]
			delete this.storage[key]
		}
		pointer++
	}
	return del
}

Stack.prototype.size = function(){
 if (Object.keys(this.storage).length === 0){
 	return 0
 }else{
 	return Object.keys(this.storage).length
 }
}

