class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
    this.i = 0;
  }

enqueue(value){
	this.storage[this.i] = value;
	this.i++

}

dequeue(){

	var del;
	for(var key in this.storage){
		del = this.storage[key]
		delete this.storage[key]
		break;
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
