var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[value] = value ;
  };

  someInstance.dequeue = function() {
    var counter = 0
    var temp ;
    for (var key in storage){

      if (counter === 0){
        temp = storage[key]
        delete storage[key]

        return temp
      }
    }
  };

  someInstance.size = function() {
    var length = 0
    for (var key in storage){
      length++
    }
    if (length === 0){
      return 0
    }
    return length
  };

  return someInstance;
};
