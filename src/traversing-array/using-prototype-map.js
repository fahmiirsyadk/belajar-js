Array.prototype.map = function(projectionFunction) {
   const results = [];
   this.forEach(itemInArray => {
      // ------------ INSERT CODE HERE! ----------------------------
		// Apply the projectionFunction to each item in the array and add
		// each result to the results array.
		// Note: you can add items to an array with the push() method.
      // ------------ INSERT CODE HERE! ----------------------------
      results.push(projectionFunction(itemInArray))
   })
   return results;
}

console.log(JSON.stringify([1,2,3].map(x => x + 1)) === '[2,3,4]')