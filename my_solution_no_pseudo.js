function twoNumberSum(array, targetSum) {
	let sum = []
	array.forEach((num, i) => {
		array.forEach((num2, index) => {
			if((i !== index) && (num + num2 === targetSum)) return sum = [num, num2] 			
		})
	})
	return sum
}

exports.twoNumberSum = twoNumberSum;
