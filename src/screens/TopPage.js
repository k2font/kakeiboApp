import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class TopPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Furaribo</Text>
                <Text style={styles.versionText}>Version 1.0.0</Text>

                <TouchableHighlight
                    style={styles.email}
                    underlayColor='#FA1A67'
                    onPress={
                        () => {
                            this.props.navigation.navigate('Login');
                        }
                    }
                >
                    <Text style={styles.whiteText}>
                        Sign in with email address
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.google}><Text style={styles.blackText}>Sign in with Google</Text></TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.signup}
                    underlayColor='#FA1A67'
                    onPress={
                        () => {
                            this.props.navigation.navigate('Signup');
                        }
                    }
                >
                    <Text style={styles.whiteText}>
                        Sign Up
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

    mainText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 50,
        marginTop: 150,
    },

    versionText: {
        alignSelf: 'center',
        color: '#969696',
        fontSize: 15,
    },

    whiteText: {
        color: 'white',
    },

    blackText: {
        color: 'black',
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

    google: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 49,
        width: 220,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        bottom: 140,
        right: 100,
    },

    signup: {
        position: 'absolute',
        backgroundColor: '#1A9BFA',
        height: 49,
        width: 220,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        bottom: 80,
        right: 100,
    },
});

export default TopPage;