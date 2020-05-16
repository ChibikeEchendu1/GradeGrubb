/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import _ from "lodash";
import React, { Component } from "react";
import { Spinner, HomeHeader } from "./index";
import SingleElementListItem from "./SingleElementListItem";
import { markFetch2 } from "../actions";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ListView,
	Image,
	TouchableOpacity,
	AsyncStorage,
	PixelRatio,
	Dimensions,
	Platform
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 360;

export function normalize(size) {
	const newSize = size * scale;
	if (Platform.OS === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
	}
}

class SingleElementView extends Component {
	state = {
		Sname: this.props.navigation.state.params.Subname,
		name: this.props.navigation.state.params.School,
		sid: this.props.navigation.state.params.item.Id,
		studentname: this.props.navigation.state.params.item.Name,
		Tname: this.props.navigation.state.params.Tname
		//Average: this.props.navigation.state.params.item.ave,
	};

	getElements() {
		return this.props.elements.reverse();
	}

	componentWillMount() {
		const { name, Sname, sid } = this.state;
		this.props.markFetch2({ name, Sname, sid });
	}

	componentDidMount() {
		const { name, Sname, sid } = this.state;
		this.props.markFetch2({ name, Sname, sid });
	}

	renderImage() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		} else {
			if (this.props.img == "../.././images/p.png") {
				console.log("heloo");

				return <Image style={{ marginTop: 20, height: "60%", width: "70%" }} source={require("../.././images/p.png")} resizeMode="contain" />;
			} else {
				return (
					<Image
						style={{ marginTop: 20, height: normalize(120), width: normalize(120), borderRadius: 60 }}
						source={{ uri: "data:image/jpeg;base64," + this.props.img }}
						resizeMode="contain"
					/>
				);
			}
		}
	}
	renderAttendace() {
		// console.log("heloo");

		return [
			<Icon key="1" color={"#1995ad"} name="envelope-open" size={22} />,
			<Text key="2" style={{ fontSize: 13, color: "#1995ad" }}>
				{" "}
				Message
			</Text>
		];
	}

	onButtonPress2() {
		console.log("hwewe");
		this.props.navigation.navigate("SendMessage", { Tname: this.state.Tname, sid: this.state.sid });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		} else {
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});
			this.dataSource = ds.cloneWithRows(this.getElements());
			return <ListView dataSource={this.dataSource} enableEmptySections={true} renderRow={this.renderRow} />;
		}
	}

	renderRow(item) {
		return <SingleElementListItem item={item} />;
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<HomeHeader navigate={this.props.navigation.goBack} ti={this.state.studentname} />
				{/* //this.state.studentname}/> */}
				<View style={{ marginTop: 0, alignItems: "center", justifyContent: "center", height: "35%", backgroundColor: "white" }}>
					<View style={{ height: "60%", width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
						<View style={{ marginLeft: "20%", alignItems: "center", justifyContent: "center", height: "100%", width: "60%" }}>
							{this.renderImage()}
						</View>
						<TouchableOpacity
							onPress={this.onButtonPress2.bind(this)}
							style={{ justifyContent: "flex-end", alignItems: "center", flexDirection: "column", width: "20%", marginTop: "25%" }}
						>
							{this.renderAttendace()}
						</TouchableOpacity>
					</View>
					<Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}>Average</Text>
					<Text style={{ fontSize: 20, marginBottom: 30, fontWeight: "bold", textAlign: "center" }}>{this.props.Av}</Text>
				</View>

				<View style={{ justifyContent: "flex-start", height: "52%", width: "100%" }}>{this.renderButton()}</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	}
});

const mapStateToProps = state => {
	const elements = _.map(state.pro.mark, (Val, uid) => {
		return { ...Val };
	});

	return { elements, Av: state.pro.av, img: state.pro.img, loading: state.pro.loading1 };
};

export default connect(
	mapStateToProps,
	{ markFetch2 }
)(SingleElementView);
