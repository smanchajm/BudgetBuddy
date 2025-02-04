import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home Screen</Text>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  