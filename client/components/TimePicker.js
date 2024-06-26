// TimePicker.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { STYLE } from "../constants/theme";

const TimePicker = ({ id, label, time, onTimeChange, showPickerId, setShowPickerId }) => {
    const onAndroidChange = (event, selectedTime) => {
      if (selectedTime) {
        onTimeChange(selectedTime);
      }
      if (event.type === 'set' || event.type === 'dismissed') {
        setShowPickerId(null);
      }
    };
  
    const onIOSChange = (event, selectedTime) => {
      if (selectedTime) {
        onTimeChange(selectedTime);
      }
    };
  
    return (
      <View>
        <Text style={STYLE.question}>{label}</Text>
        <Text style={STYLE.questioninput} onPress={() => setShowPickerId(id)}>
          {time.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })}
        </Text>
        {showPickerId === id && (
          <>
            <DateTimePicker
              testID="dateTimePicker"
              value={time}
              placeholderText="HH:MM"
              mode="time"
              is24Hour={false}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={Platform.OS === "android" ? onAndroidChange : onIOSChange}
            />
            {Platform.OS === "ios" && (
              <TouchableOpacity
                style={STYLE.button}
                onPress={() => setShowPickerId(null)}
              >
                <Text>OK</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    );
  };

export default TimePicker;
