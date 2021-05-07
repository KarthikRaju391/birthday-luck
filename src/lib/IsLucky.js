export const IsLucky = (day, luckyNum) => {
	//converting the entered dob to an array
	let digits = day.split('');
	//converting the the string elements in the array to int
	let digit = digits.map(Number);

	//filtering the above array to get an array only with numbers
	const onlyNum = digit.filter((d) => {
		return !isNaN(d);
	});
	//finding the sum of all the numbers in the array
	const date = onlyNum.reduce((sum, num) => sum + num);

	let luckDigits = luckyNum.split('');
	let luck = luckDigits.map(Number);

	const luckyNumber = luck.reduce((sum, digits) => sum + digits);
	const finalVal = date % luckyNumber;
	return finalVal;
};
