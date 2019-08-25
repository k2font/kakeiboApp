import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import firebase from 'firebase';

class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>サインアップ</Text>

                <TextInput
                    value={this.state.email}
                    style={styles.input}
                    onChangeText={(text) => { this.setState({ email: text }); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email Address"
                />

                <TextInput
                    value={this.state.password}
                    style={styles.input}
                    onChangeText={(text) => { this.setState({ password: text }); }}
                    placeholder="Password"
                    secureTextEntry
                />

                <TouchableHighlight
                    style={styles.email}
                    underlayColor='#FA1A67'
                    onPress={() => {
                        firebase.auth().createUserWithEmailAndPassword(
                            this.state.email,
                            this.state.password
                          ).then((user) => {
                            const resetAction = StackActions.reset({
                              index: 0,
                              actions: [
                                NavigationActions.navigate({ routeName: 'Home' }),
                              ],
                            });
                            this.props.navigation.dispatch(resetAction);
                          }).catch((error) => {
                            console.log(error);
                          });
                    }}
                >
                    <Text style={styles.whiteText}>
                        Sign in with email address
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
    }
});

export default LoginScreen;