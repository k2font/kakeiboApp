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
    },

    email: {
        backgroundColor: '#FA1A67',
        height: 49,
        width: 220,
        position: 'absolute',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        bottom: 200,
        right: 100,
    },

    whiteText: {
        color: 'white',
    },

    input: {
        height: 48,
        marginBottom: 16,
        padding: 8,
        borderBottomColor: '#000000',
        borderBottomWidth: 1
    },
});

export default LoginScreen;