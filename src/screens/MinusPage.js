import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

import firebase from 'firebase';

class MinusPage extends React.Component {
    state = {
        body: '',
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    ここは使った金額を登録する画面だよ。
                </Text>

                <TextInput
                    style={styles.input}
                    keyboardType='number-pad'
                    onChangeText={(text) => { this.setState({ body: text }); }}
                >
                </TextInput>

                <TouchableHighlight
                    style={styles.submit}
                    onPress={(body) => {
                        const db = firebase.firestore();
                        const { currentUser } = firebase.auth();

                        db.collection(`users/${currentUser.uid}/minus`).add({
                            body: this.state.body,
                            created_on: new Date(),
                        }).then(() => {
                            this.props.navigation.goBack();
                        }).catch((error) => {
                            console.log(error);
                        });
                    }}
                >
                    <Text style={styles.whiteText}>登録</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },

    whiteText: {
        color: 'white',
    },

    input: {
        height: 48,
        marginBottom: 16,
        padding: 8,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    submit: {
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
        top: 200,
        right: 100,
    },
});

export default MinusPage;