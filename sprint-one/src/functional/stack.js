var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  storage = {};
  var i = 0
  // Implement the methods below
  someInstance.push = function(value) {
    storage[i] = value
    i++
  };

  someInstance.pop = function() {
    var last = Object.keys(storage).length-1
    var pointer = 0
    var del;
    for (var key in storage){

       if (pointer === last ){
        del = storage[key]
         delete storage[key];
     }        
      pointer++
    }
    return del;
  };

  someInstance.size = function() {
    if(Object.keys(storage).length === 0){
      return 0;
    }else{
      return Object.keys(storage).length ;
    }
  };

  return someInstance;
};
