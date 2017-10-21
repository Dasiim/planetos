import { round, getRandomArbitrary } from "./math-helpers";

export function createWattageAndVoltageData() {
	let data = [];

	for (let x = 0; x < 30; x++) {
		data.push({
			id: x,
			wattage: round(getRandomArbitrary(0, 1000), 3),
			voltage: round(getRandomArbitrary(0, 100), 3)
		});
	}

	return data;
}
