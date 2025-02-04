import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

function DetailsScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Details Screen</Text>
        </SafeAreaView>
    );
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    });