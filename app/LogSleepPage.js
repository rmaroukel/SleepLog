import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router
import { COLORS, SIZES, FONT } from '../constants';
import { useNavigation } from '@react-navigation/native';

const LogSleepPage = () => {
  const navigation = useNavigation();
  const [sleepTime, setSleepTime] = useState('');
  const [wakeTime, setWakeTime] = useState('');

  const logSleep = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log Your Sleep</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter sleep time"
        placeholderTextColor={COLORS.gray}
        value={sleepTime}
        onChangeText={setSleepTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter wake-up time"
        placeholderTextColor={COLORS.gray}
        value={wakeTime}
        onChangeText={setWakeTime}
      />
      <Pressable style={styles.button} onPress={logSleep}>
        <Text style={styles.buttonText}>Log Sleep</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.xLarge,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.bold,
    marginBottom: SIZES.large,
  },
  input: {
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    color: COLORS.primary, // Text color
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  button: {
    marginTop: 20,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
  },
  buttonText: {
    color: COLORS.primary,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
  }
});

export default LogSleepPage;
