import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import CircleButton from '../elements/CircleButton';

import firebase from 'firebase';

class CalcPage extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.logout}
                    underlayColor='#FA1A67'
                    onPress={() => {
                        Alert.alert(
                            'ログアウトしますか？',
                            'ロップページに戻ります',
                            [
                                {
                                    text: 'ログアウト',
                                    onPress: () => {
                                        firebase.auth().signOut().then(()=>{
                                            const resetAction = StackActions.reset({
                                                index: 0,
                                                actions: [
                                                    NavigationActions.navigate({ routeName: 'Home' }),
                                                ],
                                            });
                                            this.props.navigation.dispatch(resetAction);
                                          })
                                          .catch((error)=>{
                                            console.log(`ログアウト時にエラーが発生しました (${error})`);
                                          });
                                    },
                                },
                                {
                                    text: 'キャンセル',
                                    onPress: () => {console.log('Cancel Pressed')},
                                    style: 'cancel',
                                },
                            ],
                            {cancelable: false},
                        );
                    }}
                >
                    <Text style={styles.whiteText}>ログアウト</Text>
                </TouchableHighlight>

                <Text style={styles.nokori}>のこり</Text>
                <Text style={styles.cash}>29000円</Text>

                <CircleButton
                    name="plus"
                    color="#FA1A67"
                    style={styles.plusButton}
                    onPress={
                        () => {
                            this.props.navigation.navigate('Add');
                        }
                    }
                />

                <CircleButton
                    name="minus"
                    color="#1A9BFA"
                    style={styles.minusButton}
                    onPress={
                        () => {
                            this.props.navigation.navigate('Minus');
                        }
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    },

    plusButton: {
        bottom: 20,
        left: 40,
    },

    minusButton: {
        bottom: 20,
        left: 120,
    },

    whiteText: {
        color: 'white',
    },

    nokori: {
        bottom: 150,
        fontSize: 20,
        fontWeight: 'bold',
    },

    cash: {
        bottom: 150,
        fontSize: 50,
        fontWeight: 'bold',
    },

    logout: {
        backgroundColor: '#A7A7A7',
        height: 30,
        width: 100,
        position: 'absolute',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        top: 20,
        right: 20,
    },
});

export default CalcPage;