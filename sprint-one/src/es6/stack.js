class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.i = 0;
  }

push(value){
	this.storage[this.i] = value;
	this.i++

}

pop(){
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

size(){
 if (Object.keys(this.storage).length === 0){
 	return 0
 }else{
 	return Object.keys(this.storage).length
 }
}

}