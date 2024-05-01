import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Modal,
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
              height: 12,
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
        Activity
      </Text>
      <FlatList
        contentContainerStyle={STYLE.contentContainer}
        data={sleepLogs}
        keyExtractor={(item) => item.log_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePressCard(item)}>
            <Card style={STYLE.card}>
              <Text style={[STYLE.mediumheader, { marginBottom: 20 }]}>
                {formatDate(item.log_date)}
              </Text>              
              <View style={[STYLE.divider, { marginHorizontal: 0, marginBottom: 20 }]} />
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
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={STYLE.centeredView}>
          <View style={STYLE.modalView}>
            <Text style={[STYLE.mediumheader, { marginBottom: 20, color: COLORS.lightprimary }]}>
              {formatDate(selectedLog?.log_date)}
            </Text>
            <View style={STYLE.flexRow}>
              <View style={STYLE.flexRowStart}>
                <Text style={[STYLE.list, { color: COLORS.gray }]}>
                  {formatTime(selectedLog?.bed_time)}
                </Text>
              </View>
              <View style={STYLE.divider} />
              <View style={STYLE.flexRowEnd}>
                <Text style={[STYLE.list, { color: COLORS.gray }]}>
                  {formatTime(selectedLog?.out_of_bed_time)}
                </Text>
              </View>
            </View>

            <View style={[STYLE.flexRow, { marginTop: -20 }]}>
              <View style={STYLE.flexRowStart}>
                <Text
                  style={[STYLE.list, { color: COLORS.gray3, fontSize: 12 }]}
                >
                  {formatTime(selectedLog?.sleep_attempt_time)}
                </Text>
                <MaterialIcons
                  name="circle-notifications"
                  size={18}
                  color={COLORS.gray3}
                  style={{ marginLeft: 10}}
                />
              </View>
              <View style={[STYLE.divider, { backgroundColor: COLORS.gray4}]} />
              <View style={STYLE.flexRowEnd}>
                <MaterialIcons
                  name="alarm"
                  size={18}
                  color={COLORS.gray3}
                  style={{ marginRight: 10 }}
                />
                <Text
                  style={[STYLE.list, { color: COLORS.gray3, fontSize: 12 }]}
                >
                  {formatTime(selectedLog?.final_awakening)}
                </Text>
              </View>
            </View>
            <View style={STYLE.tableContainer}>
              <View style={STYLE.tableRow}>
                <Text style={STYLE.tableLabel}>Sleep Quality:</Text>
                <Text style={STYLE.tableValue}>
                  {selectedLog?.sleep_quality}
                </Text>
              </View>
              <View style={STYLE.tableRow}>
                <Text style={STYLE.tableLabel}>Energy Level:</Text>
                <Text style={STYLE.tableValue}>
                  {selectedLog?.energy_level}
                </Text>
              </View>
              <View style={STYLE.tableRow}>
                <Text style={STYLE.tableLabel}>Mood Today:</Text>
                <Text style={STYLE.tableValue}>{selectedLog?.mood_today}</Text>
              </View>
              <View style={STYLE.tableRow}>
                <Text style={STYLE.tableLabel}>Used Sleep Aids:</Text>
                <Text style={STYLE.tableValue}>{selectedLog?.used_sleep_aids ? 'Yes' : 'No'}</Text>
              </View>
              { selectedLog?.fall_asleep_duration && 
              <View style={STYLE.tableRow}>
                <Text style={STYLE.tableLabel}>Time to Sleep:</Text>
                <Text style={STYLE.tableValue}>{selectedLog?.fall_asleep_duration}</Text>
              </View>
              }
              { selectedLog?.awakenings && 
              <View style={STYLE.tableRow}>
                <Text style={STYLE.tableLabel}>Awakenings:</Text>
                <Text style={STYLE.tableValue}>{selectedLog?.awakenings}</Text>
              </View>
              }
              { selectedLog?.awake_duration && 
              <View style={STYLE.tableRow}>
                <Text style={STYLE.tableLabel}>Awakenings Duration:</Text>
                <Text style={STYLE.tableValue}>{selectedLog?.awake_duration}</Text>
              </View>
              }
              { selectedLog?.woke_up_early && 
              <View style={STYLE.tableRow}>
                <Text style={STYLE.tableLabel}>Early Awakening:</Text>
                <Text style={STYLE.tableValue}>{selectedLog?.woke_up_early ? 'Yes' : 'No'}</Text>
              </View>
              }
              { selectedLog?.napped && 
              <View style={STYLE.tableRow}>
                <Text style={STYLE.tableLabel}>Napped:</Text>
                <Text style={STYLE.tableValue}>{selectedLog?.woke_up_early ? 'Yes' : 'No'}</Text>
              </View>
              }
            </View>

            <TouchableOpacity
              style={[STYLE.buttonClose, STYLE.primary]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={STYLE.buttontext}>Hide Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SleepLogs;
