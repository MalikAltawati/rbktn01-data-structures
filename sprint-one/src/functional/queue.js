var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var i = 0
  someInstance.enqueue = function(value) {
    storage[i]= value
    i++
  };

  someInstance.dequeue = function() {
    var last = Object.keys(storage).length
    var del;
    for( var key in storage){
      del = storage[key]
      delete storage[key]
      break
    }
    return del
  };

  someInstance.size = function() {
    if( Object.keys(storage).length === 0){
      return 0;
    }else{
      return Object.keys(storage).length
    }
  };

  return someInstance;
};
