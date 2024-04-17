import { useLayoutEffect, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { Platform } from 'react-native';

export function useEmmersiveLayout() {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync('#312651');
    }
  }, []);
}
