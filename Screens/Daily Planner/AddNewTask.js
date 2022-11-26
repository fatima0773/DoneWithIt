import react, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { addTask } from "../../redux/tasks/actionCreator";
import { useDispatch } from "react-redux";

export default function AddNewTask({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setlocation] = useState("");
  const [time, setTime] = useState("");
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

  const dispatch = useDispatch();

  const currDate =
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

  return (
    <View style={styles.background}>
      <View style={styles.standardView} top={30}>
        <Text style={styles.dateTextStyle}>{currDate}</Text>
        <Text style={styles.dateTextStyle}>{day}</Text>
        <Text style={styles.headerText}>New Task</Text>
      </View>
      <View style={styles.standardView} top={25}>
        <View>
          <Text style={styles.standardText}>Add Task Details</Text>
          <TextInput
            style={styles.standardTextField}
            placeholder="Add Task Title"
            textAlign="left"
            padding={10}
            textAlignVertical="center"
            onChangeText={(newText) => setTitle(newText)}
          ></TextInput>
          <View marginTop={10}>
            <TextInput
              style={styles.standardTextField}
              placeholder="Add Time"
              textAlign="left"
              padding={10}
              textAlignVertical="center"
              onChangeText={(newText) => setTime(newText)}
            ></TextInput>
          </View>
        </View>
        <View marginTop={30}>
          <Text style={styles.standardText}>Optional</Text>
          <TextInput
            style={styles.descTextField}
            placeholder="Add Task Description"
            textAlignVertical="top"
            onChangeText={(newText) => setDescription(newText)}
          ></TextInput>
        </View>
        <View marginTop={30}>
          <Text style={styles.standardText}>Optional</Text>
          <TextInput
            style={styles.standardTextField}
            placeholder="Add Location"
            textAlign="left"
            padding={10}
            textAlignVertical="center"
            onChangeText={(newText) => setlocation(newText)}
          ></TextInput>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.addTaskButton}
          onPress={() => {
            let newlyAddedTask = {
              title,
              description,
              location,
              time,
              taskStatus: false,
            };
            dispatch(addTask(newlyAddedTask));
            navigation.navigate("DailyPlanner");
          }}
        >
          <View>
            <Text style={styles.buttonText}> Add Task </Text>
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
  standardTextField: {
    width: "100%",
    padding: 15,
    borderRadius: 20,
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
    width: "40%",
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
