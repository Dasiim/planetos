import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { round } from "../../utils/math-helpers";
import "./solar-farm-overview.css";

const graphOptions = {
	axisY: {
		labelOffset: {
			y: 15
		},
	}
};

export default class SolarFarmOverview extends Component {

	renderSolarActivity() {
		if (this.props.solarActivity) {
			return (
				<div>
					<div>Current Solar Activity: {this.props.solarActivity.series[0][0]}W/m2</div>
					<ChartistGraph data={this.props.solarActivity} options={graphOptions} type={'Line'} />
				</div>
			)
		}
	}

	renderCloudCoverage() {
		if (this.props.cloudCoverage) {
			return (
				<div>
					<div>Current Cloud Coverage: {this.props.cloudCoverage.series[0][0]}%</div>
					<ChartistGraph data={this.props.cloudCoverage} options={graphOptions} type={"Line"} />
				</div>
			)
		}
	}

	render() {
		return (
			<div className="solar-farm-overview">
				<div className="total-kw">Total kW: {round(this.props.totalKw, 3)}</div>
				<div className="graphs">
					{this.renderSolarActivity()}
					{this.renderCloudCoverage()}
				</div>
			</div>
		);
	}
}