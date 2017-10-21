import React, { Component } from "react";
import SolarPanel from "../solar-panel/solar-panel";
import SolarFarmOverview from "../solar-farm-overview/solar-farm-overview";
import "./solar-farm.css";

export default class SolarFarm extends Component {
	renderSolarPanel(solarPanel) {
		return (
			<SolarPanel
				key={solarPanel.id.toString()}
				id={solarPanel.id}
				wattage={solarPanel.wattage}
				voltage={solarPanel.voltage}
			/>
		)
	}

	render() {
		const totalProducedEnergykWh = this.props.solarFarm.solarPanels
			.map(solarPanel => solarPanel.wattage)
			.reduce((total, num) => total + num, 0) / 1000;

		const rows = [];
		this.props.solarFarm.solarPanels
			.forEach(solarPanel => {
				rows.push(this.renderSolarPanel(solarPanel));
			});

		return (
			<div className="solar-farm">
				<SolarFarmOverview
					totalKw={totalProducedEnergykWh}
				    solarActivity={this.props.solarFarm.solarActivity}
				    cloudCoverage={this.props.solarFarm.cloudCoverage}
				/>
				<div className="content">{rows}</div>
			</div>
		);
	}
}

