/** Solution 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search1 (nums, target) {

	let start = 0;

	let end = nums.length - 1;

	while ( start <= end ) {

		const midIndex = Math.floor ( ( start + end ) / 2 );

		if ( nums[midIndex] === target ) {

			return midIndex;

		} else if ( target > nums[midIndex] ) {

			start = midIndex + 1;

		} else {

			start = midIndex - 1;
		}

	}

	return -1;

};