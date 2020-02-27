Array.prototype.filter = function(predicateFunction) {
   const results = [];
   this.forEach(itemInArray => {
      // ------------ INSERT CODE HERE! ----------------------------
		// Apply the predicateFunction to each item in the array.
		// If the result is truthy, add the item to the results array.
		// Note: remember you can add items to the array using the array's
		// push() method.
      // ------------ INSERT CODE HERE! ----------------------------
      if(predicateFunction(itemInArray) === true) {
         results.push(itemInArray);
      }
   })
   return results;
}

console.log(JSON.stringify([1,2,3].filter(x => x > 2)) === "[3]")