import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { markTaskDone } from "../../redux/tasks/actionCreator";
import { useDispatch } from "react-redux";

export default function ViewTask({ navigation }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var date = new Date();
  const day = weekDays[date.getDay()];

  const currDate =
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  const dispatch = useDispatch();
  return (
    <View style={styles.background}>
      <View style={styles.standardView} top={30}>
        <Text style={styles.dateTextStyle}>{currDate}</Text>
        <Text style={styles.dateTextStyle}>{day}</Text>
        <Text style={styles.headerText}>{navigation.getParam("title")}</Text>
      </View>
      <View style={styles.standardView} top={25}>
        <View>
          <View marginTop={10}>
            <Text style={styles.standardText}>Task Details</Text>
            <View style={styles.viewTaskInfoContainer}>
              <Text>{navigation.getParam("description")}</Text>
            </View>
          </View>
        </View>
        <View marginTop={30}>
          <Text style={styles.standardText}>Task Deadline</Text>
          <View style={styles.viewTaskInfoContainer}>
            <Text>{navigation.getParam("time")}</Text>
          </View>
        </View>
        <View marginTop={30}>
          <Text style={styles.standardText}>Location</Text>
          <View style={styles.viewTaskInfoContainer}>
            <Text>{navigation.getParam("location")}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.addTaskButton}
          onPress={() => {
            //console.log(navigation.getParam("taskStatus"));
            dispatch(markTaskDone(navigation.getParam("key")));
            //console.log(navigation.getParam("taskStatus"));
            navigation.navigate("DailyPlanner");
          }}
        >
          <View>
            <Text style={styles.buttonText}> Mark Complete </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
  },
  dateTextStyle: {
    textAlign: "left",
    color: "#A46DA8",
    fontSize: 17,
    fontWeight: "bold",
  },
  standardView: {
    margin: 20,
  },
  headerText: {
    top: 15,
    fontSize: 35,
    fontWeight: "600",
    color: "black",
  },
  viewTaskInfoContainer: {
    width: "100%",
    padding: 15,

    borderRadius: 15,
    backgroundColor: "#FAF2FB",
  },
  descTextField: {
    width: "100%",
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#FAF2FB",
    height: 100,
  },
  standardText: {
    margin: 5,
    fontWeight: "bold",
    fontSize: 15,
    color: "#969090",
  },
  alarmText: {
    margin: 5,
    fontWeight: "bold",
    fontSize: 25,
    color: "#C8A2C8",
  },
  addTaskButton: {
    width: "50%",
    height: 45,
    backgroundColor: "#C8A2C8",
    borderRadius: 20,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  buttonView: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 35,
    flex: 1,
  },
});
