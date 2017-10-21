import * as types from "../constants/actionTypes";

export const UPDATE_SOLAR_PANEL_WATTAGE_AND_VOLTAGE = (payload) => ({
	type: types.UPDATE_WATTAGE_AND_VOLTAGE,
	payload: payload
});

export const UPDATE_SOLAR_PANEL_SOLAR_ACTIVITY = (payload) => ({
	type: types.UPDATE_SOLAR_ACTIVITY,
	payload: payload
});

export const UPDATE_SOLAR_PANEL_CLOUD_COVERAGE = (payload) => ({
	type: types.UPDATE_CLOUD_COVERAGE,
	payload: payload
});
