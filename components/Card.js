import React from 'react';
import { View, StyleSheet } from 'react-native';
import { STYLE } from '../constants/theme';

const Card = ({ children, style }) => {
  return <View style={[STYLE.card, style]}>{children}</View>;
};

export default Card;
