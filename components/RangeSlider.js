import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { COLORS, STYLE } from '../constants/theme'; // Adjust the path as necessary

// Function to get the description based on the value
const getDescription = (value) => {
  const descriptions = {
    1: '1 - Very Poor',
    2: '2 - Poor',
    3: '3 - Average',
    4: '4 - Good',
    5: '5 - Very Good'
  };
  return descriptions[value] || 'Unknown'; // Fallback in case of unexpected value
};

const RangeSlider = ({ label, value, onValueChange }) => {
  return (
    <View>
      <Text style={STYLE.question}>{label}</Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor={COLORS.primary}
        maximumTrackTintColor={COLORS.gray2}
        thumbTintColor={COLORS.secondary}
      />
      <Text style={STYLE.label}>{getDescription(value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: 40,
  },
});

export default RangeSlider;
