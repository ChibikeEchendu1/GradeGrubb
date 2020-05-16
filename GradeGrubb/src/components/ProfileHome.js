import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Platform, Alert, PixelRatio, Dimensions } from "react-native";
import Swipeout from "react-native-swipeout";
import { delpro } from "../actions";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";
import { Card } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome";
import Myimage from "../.././images/p.png";

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

class ProfileHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeRowKey: null,
			activeRowPKey: null
		};
	}

	renderImage() {
		if (this.props.item.Image == "../.././images/p.png") {
			// console.log("heloo");

			return (
				<Image
					style={{ height: normalize(60), width: normalize(60), borderRadius: Platform.OS === "ios" ? 30 : 50 }}
					source={Myimage}
					resizeMode="contain"
				/>
			);
		} else {
			return (
				<Image
					style={{ height: normalize(60), width: normalize(60), borderRadius: Platform.OS === "ios" ? 30 : 50 }}
					source={{ uri: "data:image/jpeg;base64," + this.props.item.Image }}
					resizeMode="contain"
				/>
			);
		}
	}

	getNavigationType(type) {
		if (type == "Student") {
			return "Router3";
		}
		if (type == "Teacher") {
			return "Router2";
		}
		if (type == "Admin") {
			return "Ahome";
		}
		if (type == "Grader") {
			return "TeacherList";
		}
	}

	saveProfile(id, val) {
		this.props.save(id, val);
	}

	render() {
		const { item } = this.props;
		const swipeSettings = {
			autoClose: true,

			onClose: (secId, rowId, direction) => {
				if (this.state.activeRowKey != null) {
					this.setState({ activeRowPKey: null });
					this.setState({ activeRowKey: null });
				}
			},

			onOpen: (secId, rowId, direction) => {
				this.setState({ activeRowKey: this.props.item.Id });
				this.setState({ activeRowPKey: this.props.item.Pid });
			},
			right: [
				{
					onPress: () => {
						Alert.alert(
							"Alert",
							"Are you sure you want to delete ?",
							[
								{ text: "No", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
								{
									text: "Yes",
									onPress: () => {
										const { Id } = this.props.item;
										const { Pid } = this.props.item;
										this.props.delpro({ Id, Pid });
									}
								}
							],
							{ cancelable: true }
						);
					},
					text: "Delete",
					type: "delete"
				}
			],
			rowId: this.props.item.Id,
			SectionId: 1
		};

		return (
			<Swipeout {...swipeSettings}>
				<TouchableOpacity
					style={styles.listStyle}
					onPress={() => {
						let pro = {
							type: this.props.item.Type,
							school: this.props.item.School,
							Image: this.props.item.Image,
							name: this.props.item.Name,
							id: this.props.item.Id
						};
						AsyncStorage.setItem("pro", JSON.stringify(pro));
						this.props.item.off == 1 || 5
							? this.props.navigate(this.getNavigationType(this.props.item.Type), { item: this.props.item, school: this.props.item.School })
							: this.props.navigate("Offer", { school: this.props.item.School, num: this.props.item.off }); //remove the || 5 later or in next update
					}}
				>
					{this.renderImage()}
					<View style={{ alignSelf: "flex-end", width: "60%" }}>
						<Text numberOfLines={1} style={{ fontSize: normalize(17) }}>
							{this.props.item.Type}
						</Text>

						<Text numberOfLines={1} style={{ fontWeight: "bold", fontSize: normalize(20) }}>
							{this.props.item.Name}
						</Text>
					</View>
					<View style={{ alignSelf: "center", alignItems: "center", margin: "auto", width: "10%" }}>
						<Icon name="angle-right" size={25} style={{ marginRight: 10 }} />
					</View>
				</TouchableOpacity>
			</Swipeout>
		);
	}
}
const styles = StyleSheet.create({
	listStyle: {
		padding: 10,
		opacity: 0.9,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		//alignItems:"center",
		alignSelf: "center",
		backgroundColor: "white", // '#A1D6E2',

		//marginBottom:10,
		borderBottomWidth: 0.8,
		borderColor: "#D3D3D3"
	}
});

export default connect(
	null,
	{ delpro }
)(ProfileHome);
