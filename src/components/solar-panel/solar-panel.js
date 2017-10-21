import React, { Component } from "react";
import InformationBox from "../information-box/information-box";
import "./solar-panel.css";

export default class SolarPanel extends Component {
	render() {
		return (
			<div className="solar-panel">
				<div className="title">Panel {this.props.id}</div>
				<div className="content">
					<InformationBox title="Wattage" value={this.props.wattage} suffix="W" />
					<InformationBox title="Voltage" value={this.props.voltage} suffix="V"/>
				</div>
			</div>
		)
	}
}
