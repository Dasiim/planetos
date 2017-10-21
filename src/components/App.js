import React, { Component } from "react";
import { connect } from 'react-redux'
import SolarFarm from '../components/solar-farm/solar-farm';
import { GENERATE_NEW_FAKE_DATA, FETCH_SOLAR_ACTIVITY, FETCH_CLOUD_DENSITY } from "../api/index";

class App extends Component {
	componentDidMount() {
		this.props.dispatchGenerateFakeData();
		this.props.dispatchSolarActivity();
		this.props.dispatchCloudDensity();

		setInterval(this.props.dispatchGenerateFakeData, 10000);
		setInterval(this.props.dispatchSolarActivity, 300000);
		setInterval(this.props.dispatchCloudDensity, 300000);
	}

	render() {
		return (
			<div>
				<SolarFarm solarFarm={this.props.solarFarm} />
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	solarFarm: state.solarFarm.solarFarm
});

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchGenerateFakeData: () => dispatch(GENERATE_NEW_FAKE_DATA),
		dispatchSolarActivity: () => dispatch(FETCH_SOLAR_ACTIVITY),
		dispatchCloudDensity: () => dispatch(FETCH_CLOUD_DENSITY)
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);