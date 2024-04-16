import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useEmmersiveLayout } from "../hooks/useEmmersiveLayout";
import { COLORS, STYLE } from "../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";

import Card from "../components/Card";
import moment from "moment";
import axios from "axios";

const SleepLogs = () => {
  const [sleepLogs, setSleepLogs] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLog, setSelectedLog] = useState(null);

  useEmmersiveLayout();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.123:3000/fetch-sleep-logs"
        );
        setSleepLogs(response.data);
      } catch (error) {
        console.error("Error fetching sleep logs:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    // Parse the date and format it to MM/DD/YYYY
    return moment(dateString).format("MM/DD/YYYY");
  };

  const formatTime = (timeString) => {
    // Parse the time using moment, assuming timeString is something like "23:15:00"
    return moment(timeString, "HH:mm:ss").format("hh:mm A");
  };

  const ProgressBar = ({ value, max, label }) => {
    const getWidth = (value, max) => `${(value / max) * 100}%`;

    const getColor = (value) => {
      if (value === 1) return "#d93621";
      if (value === 2) return "#deac2f";
      if (value === 3) return "#d4cb1e";
      if (value === 4) return "#a9d41e";
      if (value === 5) return "#32cd32";
    };

    return (
      <View style={STYLE.progressContainer}>
        <Text style={STYLE.progressLabel}>{label}:</Text>
        <View style={STYLE.progressBar}>
          <View
            style={{
              height: 20,
              width: getWidth(value, max),
              backgroundColor: getColor(value),
              borderRadius: 5,
            }}
          />
          <Text style={STYLE.valueText}>{value}</Text>
        </View>
      </View>
    );
  };

  const handlePressCard = (log) => {
    setSelectedLog(log);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary, paddingTop: 120 }}>
      <Text style={[STYLE.largeheader, { alignSelf: "center" }]}>
        Log Entries
      </Text>
      <FlatList
        contentContainerStyle={STYLE.contentContainer}
        data={sleepLogs}
        keyExtractor={(item) => item.log_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePressCard(item)}>
            <Card style={STYLE.card}>
              <Text style={[STYLE.dateinput, { marginBottom: 20 }]}>
                {formatDate(item.log_date)}
              </Text>
              <View style={STYLE.flexRow}>
                <View style={STYLE.flexColumn}>
                  <MaterialIcons
                    name="nights-stay"
                    size={24}
                    color={COLORS.gray}
                  />
                  <Text style={[STYLE.list, { color: COLORS.gray }]}>
                    {formatTime(item.bed_time)}
                  </Text>
                </View>
                <View style={STYLE.flexColumn}>
                  <MaterialIcons name="sunny" size={24} color={COLORS.gray} />
                  <Text style={[STYLE.list, { color: COLORS.gray }]}>
                    {formatTime(item.out_of_bed_time)}
                  </Text>
                </View>
              </View>
              <View style={STYLE.list}>
                <ProgressBar
                  label="Quality"
                  value={item.sleep_quality}
                  max={5}
                />
              </View>
              <View style={STYLE.list}>
                <ProgressBar label="Energy" value={item.energy_level} max={5} />
              </View>
              <View style={STYLE.list}>
                <ProgressBar label="Mood" value={item.mood_today} max={5} />
              </View>
            </Card>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={STYLE.header}>No entries found</Text>}
        style={{ flex: 1 }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={STYLE.centeredView}>
          <View style={STYLE.modalView}>
              <View style={STYLE.flexColumn}>
                <MaterialIcons
                  name="nights-stay"
                  size={24}
                  color={COLORS.gray}
                />
                <Text style={[STYLE.list, { color: COLORS.gray }]}>
                  {formatTime(selectedLog?.bed_time)}
                </Text>
              </View>
              <View style={STYLE.flexColumn}>
                <MaterialIcons name="sunny" size={24} color={COLORS.gray} />
                <Text style={[STYLE.list, { color: COLORS.gray }]}>
                  {formatTime(selectedLog?.out_of_bed_time)}
                </Text>
              </View>
            <Text style={STYLE.modalText}>
              Sleep Quality: {selectedLog?.sleep_quality}
            </Text>
            <Text style={STYLE.modalText}>
              Energy Level: {selectedLog?.energy_level}
            </Text>
            <Text style={STYLE.modalText}>
              Mood Today: {selectedLog?.mood_today}
            </Text>
            <TouchableOpacity
              style={[STYLE.button, STYLE.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={STYLE.textStyle}>Hide Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SleepLogs;
