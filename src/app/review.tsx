
import React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function ReviewScreen() {
  const { userName, email, yearOfBirth, age } =
    useLocalSearchParams();

  const handleContinue = () => {
    if (Number(age) < 18) {
      Alert.alert(
        'Age Restriction',
        'You must be 18 years old to proceed.'
      );
      return;
    }

    router.push({
      pathname: '/success',
      params: { userName },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Review Your Details</Text>

      <Text>Name: {userName}</Text>
      <Text>Email: {email}</Text>
      <Text>Year of Birth: {yearOfBirth}</Text>
      <Text>Age: {age}</Text>

      <View style={styles.button}>
        <Button
          title="Go Back and Edit"
          onPress={() => router.back()}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Confirm"
          onPress={handleContinue}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  button: {
    marginTop: 20,
  },
});
