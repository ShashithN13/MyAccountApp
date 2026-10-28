import { useRouter } from 'expo-router'
import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function RegistrationScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReview = () => {
    if (!userName || !email || !phoneNumber || !password || !confirmPassword || !yearOfBirth) {
      Alert.alert('Error','Please fill in all fields.');
      return;
    }

    const currentYear = new Date().getFullYear();
    const birthYear = Number(yearOfBirth);
    if (!/^\d{4}$/.test(yearOfBirth) || birthYear < 1900 || birthYear > currentYear) {
      Alert.alert('Invalid year of birth', `Enter a valid year between 1900 and ${currentYear}.`);
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error','Passwords do not match');
      return;
    }

    const age = currentYear - birthYear;
    router.push({
      pathname: '/review',
      params: { userName, email, phoneNumber, yearOfBirth, age: String(age) }
    });
  };

  return(
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Create Your Account</Text>

      <TextInput style={styles.input} placeholder="Username" value={userName} onChangeText={setUserName} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" value={phoneNumber} onChangeText={setPhoneNumber} />
      <TextInput style={styles.input} placeholder="Year of Birth" keyboardType="number-pad" value={yearOfBirth} onChangeText={setYearOfBirth} maxLength={4} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
      <Button title="Review Details" onPress={handleReview} />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
  },
});
