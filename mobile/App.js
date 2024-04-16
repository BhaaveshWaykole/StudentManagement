import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AttendanceCard from './screens/AttendanceCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AttendanceCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

