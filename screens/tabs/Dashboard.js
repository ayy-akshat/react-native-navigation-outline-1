import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../../styles';

export default class DashboardScreen extends React.Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Text>
                    Dashboard
                </Text>
            </View>
        )
    }
}