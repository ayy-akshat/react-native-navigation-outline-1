import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from '../../../styles';

export default class WorkoutScreen extends React.Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Text>
                    Workout
                </Text>
                <Button title='categorial workout' onPress={() => {
                    this.props.navigation.navigate("CategorialWorkoutS");
                }}/>
                <Button title='sport workout' onPress={() => {
                    this.props.navigation.navigate("SportWorkoutS");
                }}/>
            </View>
        )
    }
}