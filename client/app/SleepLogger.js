import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { STYLE, COLORS } from "../constants/theme";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEmmersiveLayout } from "../hooks/useEmmersiveLayout";
import RangeSlider from "../components/RangeSlider";
import Card from "../components/Card";
import TimePicker from "../components/TimePicker";
import moment from "moment";
import axios from "axios";

const initializeTime = (hours, minutes) => {
  const time = new Date();
  time.setHours(hours, minutes, 0, 0);
  return time;
};


const SleepLogger = () => {
  const [usedSleepAids, setUsedSleepAids] = useState("N");
  const [sleepAidDetails, setSleepAidDetails] = useState("");
  const [bedTime, setBedTime] = useState(initializeTime(21, 0));
  const [sleepAttemptTime, setSleepAttemptTime] = useState(initializeTime(22, 0));
  const [fallAsleepDuration, setFallAsleepDuration] = useState("");
  const [awakenings, setAwakenings] = useState("");
  const [awakeDuration, setAwakeDuration] = useState("");
  const [finalAwakening, setFinalAwakening] = useState(initializeTime(6, 30));
  const [outOfBedTime, setOutOfBedTime] = useState(initializeTime(7, 0));
  const [wokeUpEarly, setWokeUpEarly] = useState("N");
  const [wokeUpEarlyDuration, setWokeUpEarlyDuration] = useState("");
  const [napped, setNapped] = useState("N");
  const [napsCount, setNapsCount] = useState("");
  const [napDuration, setNapDuration] = useState("");
  const [sleepQuality, setSleepQuality] = useState(1);
  const [energyLevel, setEnergyLevel] = useState(1);
  const [moodToday, setMoodToday] = useState(1);
  const [showPickerId, setShowPickerId] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [sleepLogs, setSleepLogs] = useState([]);
  const navigation = useNavigation();

  useEmmersiveLayout();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://0.0.0.0:3000/fetch-sleep-logs" // Replace with your actual API endpoint
        );
        setSleepLogs(response.data);
      } catch (error) {
        console.error("Error fetching sleep logs:", error);
      }
    };

    fetchData();
    console.log("Sleep logs:", sleepLogs);
  }, []);

  const onAndroidChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    if (event.type === "set" || event.type === "dismissed") {
      setShowDatePicker(null);
    }
  };

  const onIOSChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const getTimeString = (date) => {
    return date.toTimeString().split(" ")[0];
  };

  const formatDateForComparison = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };
  
  const logExistsForDate = (selectedDate) => {
    return sleepLogs.some(log => formatDateForComparison(log.log_date) === formatDateForComparison(selectedDate));
  };
  

  const handleSubmit = async () => {
    console.log("Submitting sleep log...");
    try {
      const response = await axios.post(
        "http://0.0.0.0:3000/submit-sleep-log", // Replace with your actual API endpoint
        {
          logDate: date.toISOString().slice(0, 10),
          usedSleepAids: usedSleepAids === "Y",
          sleepAidDetails,
          bedTime: getTimeString(bedTime),
          sleepAttemptTime: getTimeString(sleepAttemptTime),
          fallAsleepDuration: parseInt(fallAsleepDuration, 10),
          awakenings: parseInt(awakenings, 10),
          awakeDuration: parseInt(awakeDuration, 10),
          finalAwakening: getTimeString(finalAwakening),
          outOfBedTime: getTimeString(outOfBedTime),
          wokeUpEarly: wokeUpEarly === "Y",
          wokeUpEarlyDuration: parseInt(wokeUpEarlyDuration, 10),
          napped: napped === "Y",
          napsCount: parseInt(napsCount, 10),
          napDuration: parseInt(napDuration, 10),
          sleepQuality,
          energyLevel,
          moodToday,
        }
      );
      console.log("Sleep log submitted:", response.data);
      navigation.navigate("SleepLogs");
    } catch (error) {
      console.error("Error submitting sleep log:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={[STYLE.contentContainer, { flexGrow: 1 }]}>
      <View style={STYLE.fullcontainer}>
        <Text style={[STYLE.largeheader, { alignSelf: "center" }]}>
          Sleep Log
        </Text>
        <Card style={STYLE.datecard}>
          <Text
            style={[STYLE.dateinput, { color: COLORS.white }]}
            onPress={() => setShowDatePicker(true)}
          >
            {date.toDateString()}
          </Text>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              minimumDate={new Date(2024, 0, 1)}
              maximumDate={new Date()}
              value={date}
              mode="date"
              display={Platform.OS === "ios" ? "inline" : "default"}
              accentColor={COLORS.primary}
              onChange={
                Platform.OS === "android" ? onAndroidChange : onIOSChange
              }
            />
          )}
        </Card>
        {logExistsForDate(date) ? (
          <>
          <Text style={[STYLE.header, { alignSelf: "center", textAlign: "center", marginTop: 20}]}>A sleep log for this date already exists.</Text>
          <TouchableOpacity style={STYLE.buttonSecondary} onPress={() => navigation.navigate("SleepLogs")}><Text style={STYLE.buttonText}>View My Sleep Logs</Text></TouchableOpacity>
          </>
        ) : (
          <>
            <Card>
              <Text style={STYLE.question}>
                Did you use any sleep aids last night?
              </Text>
              <View style={STYLE.buttonContainer}>
                <TouchableOpacity
                  style={[
                    STYLE.choiceButton,
                    usedSleepAids === true ? STYLE.selected : null,
                  ]}
                  onPress={() => setUsedSleepAids(true)}
                >
                  <Text style={STYLE.choiceText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    STYLE.choiceButton,
                    usedSleepAids === false ? STYLE.selected : null,
                  ]}
                  onPress={() => setUsedSleepAids(false)}
                >
                  <Text style={STYLE.choiceText}>No</Text>
                </TouchableOpacity>
              </View>
            </Card>
            <Card>
              <TimePicker
                id="bedTime"
                label="What time did you get into bed last night?"
                time={bedTime}
                onTimeChange={setBedTime}
                showPickerId={showPickerId}
                setShowPickerId={setShowPickerId}
              />
            </Card>
            <Card>
              <TimePicker
                id="sleepAttemptTime"
                label="What time did you try to go to sleep?"
                time={sleepAttemptTime}
                onTimeChange={setSleepAttemptTime}
                showPickerId={showPickerId}
                setShowPickerId={setShowPickerId}
              />
            </Card>

            <Card>
              <Text style={STYLE.question}>
                How long did it take you to fall asleep?
              </Text>
              <TextInput
                style={STYLE.questioninput}
                onChangeText={setFallAsleepDuration}
                value={fallAsleepDuration}
                placeholder="Minutes"
                keyboardType="numeric"
              />
            </Card>

            <Card>
              <Text style={STYLE.question}>
                How many times did you wake up at night?
              </Text>
              <TextInput
                style={STYLE.questioninput}
                onChangeText={setAwakenings}
                value={awakenings}
                placeholder="Number"
                keyboardType="numeric"
              />
            </Card>

            <Card>
              <Text style={STYLE.question}>
                How long were you awake at night during those awakenings in
                total?
              </Text>
              <TextInput
                style={STYLE.questioninput}
                onChangeText={setAwakeDuration}
                value={awakeDuration}
                placeholder="Minutes"
                keyboardType="numeric"
              />
            </Card>

            <Card>
              <TimePicker
                id="finalAwakening"
                label="What time was your final awakening today?"
                time={finalAwakening}
                onTimeChange={setFinalAwakening}
                showPickerId={showPickerId}
                setShowPickerId={setShowPickerId}
              />
            </Card>

            <Card>
              <TimePicker
                id="outOfBedTime"
                label="What time did you get out of bed today?"
                time={outOfBedTime}
                onTimeChange={setOutOfBedTime}
                showPickerId={showPickerId}
                setShowPickerId={setShowPickerId}
              />
            </Card>

            <Card>
              <Text style={STYLE.question}>
                Did you wake up earlier than you planned?
              </Text>
              <View style={STYLE.buttonContainer}>
                <TouchableOpacity
                  style={[
                    STYLE.choiceButton,
                    wokeUpEarly === "Y" ? STYLE.selected : null,
                  ]}
                  onPress={() => setWokeUpEarly("Y")}
                >
                  <Text style={STYLE.choiceText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    STYLE.choiceButton,
                    wokeUpEarly === "N" ? STYLE.selected : null,
                  ]}
                  onPress={() => setWokeUpEarly("N")}
                >
                  <Text style={STYLE.choiceText}>No</Text>
                </TouchableOpacity>
              </View>
            </Card>
            {wokeUpEarly === "Y" && (
              <>
                <View style={[STYLE.verticalDivider, { zIndex: -100 }]} />
                <Card style={{ backgroundColor: COLORS.tertiary }}>
                  <Text style={[STYLE.question, { color: COLORS.white }]}>
                    How many minutes earlier?
                  </Text>
                  <TextInput
                    style={STYLE.questioninput}
                    onChangeText={setWokeUpEarlyDuration}
                    value={wokeUpEarlyDuration}
                    placeholder="Minutes earlier"
                    keyboardType="numeric"
                  />
                </Card>
              </>
            )}

            <Card>
              <Text style={STYLE.question}>Did you nap or doze yesterday?</Text>
              <View style={STYLE.buttonContainer}>
                <TouchableOpacity
                  style={[
                    STYLE.choiceButton,
                    napped === "Y" ? STYLE.selected : null,
                  ]}
                  onPress={() => setNapped("Y")}
                >
                  <Text style={STYLE.choiceText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    STYLE.choiceButton,
                    napped === "N" ? STYLE.selected : null,
                  ]}
                  onPress={() => setNapped("N")}
                >
                  <Text style={STYLE.choiceText}>No</Text>
                </TouchableOpacity>
              </View>
            </Card>

            {napped === "Y" && (
              <>
                <View style={[STYLE.verticalDivider, { zIndex: -100 }]} />
                <Card style={{ backgroundColor: COLORS.tertiary }}>
                  <Text style={[STYLE.question, { color: COLORS.white }]}>
                    How many / length of naps?
                  </Text>
                  <TextInput
                    style={STYLE.questioninput}
                    marginBottom={20}
                    onChangeText={setNapsCount}
                    value={napsCount}
                    placeholder="Number of naps"
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={STYLE.questioninput}
                    onChangeText={setNapDuration}
                    value={napDuration}
                    placeholder="Total nap duration (minutes)"
                    keyboardType="numeric"
                  />
                </Card>
              </>
            )}

            <Card>
              <RangeSlider
                label="How was your sleep quality last night?"
                value={sleepQuality}
                onValueChange={setSleepQuality}
              />
            </Card>

            <Card>
              <RangeSlider
                label="Energy level today"
                value={energyLevel}
                onValueChange={setEnergyLevel}
              />
            </Card>

            <Card>
              <RangeSlider
                label="How is your mood today?"
                value={moodToday}
                onValueChange={setMoodToday}
              />
            </Card>

            <TouchableOpacity
              style={STYLE.button}
              onPress={() => handleSubmit()}
            >
              <Text style={STYLE.buttontext}>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default SleepLogger;
