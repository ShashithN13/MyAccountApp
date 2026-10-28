import { router, useLocalSearchParams } from 'expo-router';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function ReviewScreen() {
  const { userName, email, phoneNumber, yearOfBirth, age } = useLocalSearchParams();
  const ageValue = Array.isArray(age) ? age[0] : age;
  const calculatedAge = Number(ageValue);

  const handleConfirm = () => {
    if (!Number.isFinite(calculatedAge) || calculatedAge < 18) {
      Alert.alert(
        'Age Restriction',
        'You must be 18 years old to proceed.'
      );
      return;
    }

    router.push({
      pathname: '/success',
      params: { userName: Array.isArray(userName) ? userName[0] : userName },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Your Details</Text>

      <View style={styles.card}>
        <Text style={styles.detail}>Name: {userName}</Text>
        <Text style={styles.detail}>Email: {email}</Text>
        <Text style={styles.detail}>Phone: {phoneNumber || 'Not provided'}</Text>
        <Text style={styles.detail}>Year of Birth: {Array.isArray(yearOfBirth) ? yearOfBirth[0] : yearOfBirth}</Text>
        <Text style={styles.detail}>Age: {Number.isFinite(calculatedAge) ? calculatedAge : 'Unknown'}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Edit Info" color="red" onPress={() => router.back()} />
        <Button title="Confirm & Submit" onPress={handleConfirm} />
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
  detail: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row', justifyContent: 'space-between',
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center'
  },
  card: {
    backgroundColor: '#f9f9f9', padding: 20, borderRadius: 8, marginBottom: 20
  }
});
