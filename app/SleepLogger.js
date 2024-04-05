import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { STYLE, COLORS } from "../constants/theme";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEmmersiveLayout } from "../hooks/useEmmersiveLayout";
import RangeSlider from "../components/RangeSlider";
import Card from "../components/Card";
import TimePicker from "../components/TimePicker";

const SleepLogger = () => {
  const [usedSleepAids, setUsedSleepAids] = useState("N");
  const [sleepAidDetails, setSleepAidDetails] = useState("");
  const [bedTime, setBedTime] = useState(new Date());
  const [sleepAttemptTime, setSleepAttemptTime] = useState(new Date());
  const [fallAsleepDuration, setFallAsleepDuration] = useState("");
  const [awakenings, setAwakenings] = useState("");
  const [awakeDuration, setAwakeDuration] = useState("");
  const [finalAwakening, setFinalAwakening] = useState(new Date());
  const [outOfBedTime, setOutOfBedTime] = useState(new Date());
  const [wokeUpEarly, setWokeUpEarly] = useState("N");
  const [wokeUpEarlyDuration, setWokeUpEarlyDuration] = useState("");
  const [napped, setNapped] = useState("N");
  const [napsCount, setNapsCount] = useState("");
  const [napDuration, setNapDuration] = useState("");
  const [sleepQuality, setSleepQuality] = useState(1);
  const [energyLevel, setEnergyLevel] = useState(1);
  const [moodToday, setMoodToday] = useState(1);
  const [showPickerId, setShowPickerId] = useState(null);

  useEmmersiveLayout();

  const getEnergyLevelDescription = (value) => {
    const descriptions = {
      1: "1 - Very Poor",
      2: "2 - Poor",
      3: "3 - Average",
      4: "4 - Good",
      5: "5 - Very Good",
    };
    return descriptions[value] || "Unknown";
  };

  return (
    <ScrollView contentContainerStyle={STYLE.contentContainer}>
      <View style={STYLE.fullcontainer}>
        <Text style={[STYLE.largeheader, { alignSelf: "center" }]}>
          Sleep Log
        </Text>
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
            How long were you awake at night during those awakenings in total?
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
          {wokeUpEarly === "Y" && (
            <TextInput
              style={[STYLE.questioninput, {marginVertical: 20}]}
              onChangeText={setWokeUpEarlyDuration}
              value={wokeUpEarlyDuration}
              placeholder="Minutes earlier"
              keyboardType="numeric"
            />
          )}
        </Card>

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
          {napped === "Y" && (
            <>
              <TextInput
                style={STYLE.questioninput}
                marginVertical={20}
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
            </>
          )}
        </Card>

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

        <TouchableOpacity style={STYLE.button}>
          <Text style={STYLE.buttontext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SleepLogger;
