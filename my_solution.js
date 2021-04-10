function twoNumberSum(array, targetSum) {
	let sum = []
  	// loop through the array
	array.forEach((num, i) => {
	// loop through it again, as long as the index is not current index, see if sum is target
		array.forEach((num2, index) => {
	// if sum is target, break
			if((i !== index) && (num + num2 === targetSum)) return sum = [num, num2] 			
		})
	})
	// if no target sum, return empty array
	return sum
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
