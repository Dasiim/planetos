export function round(value, decimals) {
	return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

export function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

export function addZeroBefore(n) {
	return (n < 10 ? '0' : '') + n;
}