import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from '../../../styles';

export default class DietScreen extends React.Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Text>
                    Diet
                </Text>
                <Button title='diet info' onPress={() => {
                    this.props.navigation.navigate("DietInfoS");
                }}/>
            </View>
        )
    }
}