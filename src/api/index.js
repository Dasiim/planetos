import fetch from "isomorphic-fetch";
import { round, addZeroBefore } from "../utils/math-helpers";
import {
	UPDATE_SOLAR_PANEL_SOLAR_ACTIVITY,
	UPDATE_SOLAR_PANEL_CLOUD_COVERAGE,
	UPDATE_SOLAR_PANEL_WATTAGE_AND_VOLTAGE
} from "../actions/index";
import { SOLAR_ACTIVITY_URL, CLOUD_COVERAGE_URL } from "../constants/api";
import { createWattageAndVoltageData } from "../utils/data-generation";

export const GENERATE_NEW_FAKE_DATA = (dispatch) => {
	dispatch(UPDATE_SOLAR_PANEL_WATTAGE_AND_VOLTAGE(createWattageAndVoltageData()))
};

export const FETCH_SOLAR_ACTIVITY = (dispatch) =>  {
	fetch(SOLAR_ACTIVITY_URL)
		.then(response => response.json())
		.then(response => response.entries)
		.then(data => {
			let solarActivityTimes = [];
			let solarActivityValues = [];
			data.forEach(data => {
				solarActivityTimes.push(`${addZeroBefore(new Date(data.axes.time).getHours())}:${addZeroBefore(new Date(data.axes.time).getMinutes())}`);
				solarActivityValues.push(round(data.data.av_swsfcdown, 3));
			});

			dispatch(UPDATE_SOLAR_PANEL_SOLAR_ACTIVITY({
				series: [solarActivityValues],
				labels: solarActivityTimes
			}))
		});
};

export const FETCH_CLOUD_DENSITY = (dispatch) => {
	fetch(CLOUD_COVERAGE_URL)
		.then(response => response.json())
		.then(response => response.entries)
		.then(data => {
			let cloudCoverageTimes = [];
			let cloudCoverageValues = [];
			data.forEach(data => {
				cloudCoverageTimes.push(`${addZeroBefore(new Date(data.axes.time).getHours())}:${addZeroBefore(new Date(data.axes.time).getMinutes())}`);
				cloudCoverageValues.push(round(data.data.av_ttl_cld * 100, 3))
			});

			dispatch(UPDATE_SOLAR_PANEL_CLOUD_COVERAGE({
				series: [cloudCoverageValues],
				labels: cloudCoverageTimes
			}))
		});
};