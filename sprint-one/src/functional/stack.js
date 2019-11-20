var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[value] = value;
  };

  someInstance.pop = function() {
    if (Object.keys(storage).length === 0) {
      return 0
    }
    var count = 0 , tmp;
    for(var key in storage){
      count++;
      if (count === Object.keys(storage).length ) {
        tmp = storage[key];
        delete storage[key];
        return tmp;
      }
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
