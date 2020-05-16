/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { FormInput, Card2, Card2stan, LogoHouse2, FormButton, Link, Spinner } from "./index";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, passwordChanged2, NameChanged, signupUser } from "../actions";
import { StyleSheet, Text, View, Platform, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Keyboard, AsyncStorage } from "react-native";

class SignupForm extends Component {
	onEmailChanged(text) {
		this.props.emailChanged(text);
	}

	onPasswordChanged(text) {
		this.props.passwordChanged(text);
	}

	onPasswordChanged2(text) {
		this.props.passwordChanged2(text);
	}
	onNameChanged(text) {
		this.props.NameChanged(text);
	}

	goback() {
		if (this.props.goat) {
			const { user } = this.props;
			console.log();
			AsyncStorage.setItem("logged", JSON.stringify(parseInt(user)));
			AsyncStorage.setItem("blocked", JSON.stringify("Done"));
			console.log("profile");
			this.props.navigation.navigate("Profile", { Id: parseInt(this.props.user) });
		}
	}

	onButtonPress() {
		const { Name, email, password, password2 } = this.props;
		this.props.signupUser({ Name, email, password, password2 });
	}

	goToHome = (nav = this.props.nav) => {
		nav("Code2");
	};

	renderError() {
		if (this.props.error) {
			return (
				<View>
					<Text style={{ alignSelf: "center", fontSize: 9, color: "red" }}> {this.props.error}</Text>
				</View>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		} else {
			return <FormButton press={this.onButtonPress.bind(this)} val={"SignUp"} />;
		}
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : "padding"} style={styles.container}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
						<View>
							<LogoHouse2 />

							<Card2stan>
								<FormInput val={this.props.Name} ct={this.onNameChanged.bind(this)} bool={false} ph={"Name"} />
							</Card2stan>
							<Card2stan>
								<FormInput val={this.props.email} ct={this.onEmailChanged.bind(this)} bool={false} ph={"Email"} />
							</Card2stan>
							<Card2stan>
								<FormInput val={this.props.password} ct={this.onPasswordChanged.bind(this)} bool={true} ph={"Password"} />
							</Card2stan>
							<Card2stan>
								<FormInput val={this.props.password2} ct={this.onPasswordChanged2.bind(this)} bool={true} ph={"Confirm Password"} />
							</Card2stan>
							<Card2stan>{this.renderButton()}</Card2stan>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>

				<View style={{ flex: 1 }}>
					<View style={{ position: "absolute", bottom: 0, alignSelf: "center", height: 60, width: "100%" }}>
						<Link val={"login"} navigate={this.props.navigation.goBack} />
					</View>
				</View>
				{this.renderError()}
				{this.goback()}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white"
	}
});

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		Name: state.auth.Name,
		password2: state.auth.password2,
		loading: state.auth.loading,
		error: state.auth.error,
		user: state.auth.user,
		goat: state.auth.goat
	};
};

export default connect(
	mapStateToProps,
	{ emailChanged, passwordChanged, passwordChanged2, NameChanged, signupUser }
)(SignupForm);
