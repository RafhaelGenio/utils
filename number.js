const prefixes = ['', 'k', 'M', 'B', 'T']

export const roundUpToDecimalPlace = (number, decimals = 1) => {
	return Math.round(number * (10 ** decimals)) / (10 ** decimals)
}

export const withLetter = (number, decimals = 1) => {
	let powerOfThousand = 0
	let value = number

	while (value >= 1000) {
		powerOfThousand += 1
		value /= 1000
	}

	return `${roundUpToDecimalPlace(value, decimals)}${prefixes[powerOfThousand]}`
}

export const withCommas = (number, decimals = 2) => {
	const rounded = roundUpToDecimalPlace(number, decimals).toFixed(decimals)
	const parts = rounded.split(".");
	const [wholeNumber, ...remaining] = parts

	return [wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ","), ...remaining].join('.')
}
