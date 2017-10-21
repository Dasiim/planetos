import * as types from "../constants/actionTypes";

const solarFarm = (state = {
	solarFarm: {
		solarPanels: [],
		solarActivity: undefined,
		cloudCoverage: undefined
	}
}, action) => {
	switch (action.type) {
		case types.UPDATE_WATTAGE_AND_VOLTAGE:
			return {
				...state,
				solarFarm: {
					...state.solarFarm,
					solarPanels: action.payload
				}
			};

		case types.UPDATE_SOLAR_ACTIVITY:
			return {
				solarFarm: {
					...state.solarFarm,
					solarActivity: action.payload
				}
			};

		case types.UPDATE_CLOUD_COVERAGE:
			return {
				solarFarm: {
					...state.solarFarm,
					cloudCoverage: action.payload
				}
			};

		default:
			return state;
	}
};

export default solarFarm;