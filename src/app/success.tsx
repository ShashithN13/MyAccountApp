
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function SuccessScreen() {
  const { userName } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>✅</Text>

      <Text style={styles.heading}>
        Registration Successful!
      </Text>

      <Text style={styles.message}>
        Welcome, {userName}!
      </Text>

      <Text>Your account has been created successfully.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  message: {
    fontSize: 20,
    marginBottom: 10,
  },
});
