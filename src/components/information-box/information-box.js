import React, { Component } from "react";
import "./information-box.css";

export default class InformationBox extends Component {
	render() {
		return (
			<div className="information-box">
				<div>{this.props.title}</div>
				<div>{this.props.value} {this.props.suffix}</div>
			</div>
		)
	}
}