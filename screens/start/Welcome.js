import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from '../../styles';

export default class WelcomeScreen extends React.Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Text>
                    Welcome
                </Text>
                <Button title='tabs' onPress={() => {
                    this.props.navigation.navigate("MainTabN");
                }}/>
            </View>
        )
    }
}