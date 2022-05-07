function convertToRoman(num) {
	let romanObj = {
		'M': 1000,
		'CM': 900,
		'D': 500,
		'CD': 400,
		'C': 100,
		'XC': 90,
		'L': 50,
		'XL': 40,
		'X': 10,
		'IX': 9,
		'V': 5,
		'IV': 4,
		'I': 1
	}

	let arr = [];

	for (let i in romanObj) {
		let div = Math.floor(num / romanObj[i]);
		console.log(div, romanObj[i])
		if (div > 0) {
		arr.push(i.repeat(div));
		num = num - (romanObj[i] * div);
		}
	}

	return arr.join("");
	}

console.log(convertToRoman(47));