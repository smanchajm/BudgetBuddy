import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import SummaryChart from '../components/SummaryChart';

function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <SummaryChart />
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
  