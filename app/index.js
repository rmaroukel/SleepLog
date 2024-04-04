import { View, Text, Button, SafeAreaView, StyleSheet, ScrollView, Pressable, StatusBar } from "react-native";
import { COLORS, icons, images, SIZES, FONT } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <View
          style={styles.container}
        >
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.infoText}>
            A good night's sleep is essential for your health and well-being. It helps to improve your brain performance, mood, and overall health. Logging your sleep can be a great first step towards understanding your sleep patterns and making necessary improvements.
          </Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('LogSleepPage')}>
      <Text style={styles.buttontext}>Add New Sleep Log</Text>
    </Pressable>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.xLarge,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  button:{
    fontFamily: FONT.medium,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
  },
  buttontext:{
    fontFamily: FONT.small,
    color: COLORS.primary,
  },
  welcomeText: {
    fontSize: SIZES.xxLarge,
    color: COLORS.white,
    fontFamily: FONT.bold,
    marginBottom: 40,
    textAlign: 'center'
  },
  infoText: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
    fontFamily: FONT.regular,
    marginBottom: 60,
    textAlign: 'center',
  },
  calltoaction: {
    fontSize: SIZES.large,
    color: COLORS.tertiary,
    fontFamily: FONT.bold,
    marginBottom: 40,
    textAlign: 'center',
  }
});

export default Home;
