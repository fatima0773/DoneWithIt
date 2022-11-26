import react, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Checkbox from "expo-checkbox";
import { useDispatch } from "react-redux";
import { markTaskDone, markTaskUnDone } from "../../redux/tasks/actionCreator";

export default function DailyPlanner({ navigation }) {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskReducer);

  const request = async () => {
    try {
      console.log("Sending");
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

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

  return (
    <View style={styles.background}>
      <Text style={styles.headerText}>DAILY PLANNER</Text>
      <View style={styles.box} flexDirection={"row"}>
        <View flex={1}>
          <Text style={styles.subtitle}>Good Day, Fatima!</Text>
          <Text style={styles.standardtext}>
            You have {taskList.length} Tasks today
          </Text>
        </View>
        <View flex={1}>
          <Text style={styles.dateTextStyle}>{currDate}</Text>
          <Text style={styles.dateTextStyle}>{day}</Text>
        </View>
      </View>

      <View height={"75%"}>
        <ScrollView style={styles.scrollView}>
          {taskList.map((item, index) => {
            if (item.taskStatus == false) {
              return (
                <View key={index} flexDirection={"row"}>
                  <View style={styles.checkBoxContainer}>
                    <Checkbox
                      style={styles.checkBox}
                      value={item.taskStatus ? "#C8A2C8" : undefined}
                      onValueChange={() => dispatch(markTaskDone(item.key))}
                    ></Checkbox>
                  </View>
                  <View flex={1}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("ViewTask", item)}
                    >
                      <View style={styles.taskBox}>
                        <View flex={1}>
                          <Text style={styles.taskTitle}>{item.title}</Text>
                          <Text style={styles.taskDesc}>
                            {item.description}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.taskTime}>{item.time}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }
          })}
          <Text style={styles.completed}>Completed</Text>
          {taskList.map((item, index) => {
            if (item.taskStatus == true) {
              return (
                <View key={index} flexDirection={"row"}>
                  <View style={styles.checkBoxContainer}>
                    <Checkbox
                      style={styles.checkBox}
                      value={item.taskStatus ? "#C8A2C8" : undefined}
                      onValueChange={() => {
                        console.log(item.key);
                        dispatch(markTaskUnDone(item.key));
                      }}
                    ></Checkbox>
                  </View>
                  <View flex={1}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("ViewTask", item)}
                    >
                      <View style={styles.taskBox}>
                        <View flex={1}>
                          <Text style={styles.taskTitle}>{item.title}</Text>
                          <Text style={styles.taskDesc}>
                            {item.description}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.taskTime}>{item.time}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.newTaskButton}
          onPress={() => navigation.navigate("AddNewTask")}
        >
          <View>
            <Text style={styles.buttonText}>Add New Task</Text>
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
  headerText: {
    top: 15,
    fontSize: 40,
    fontWeight: "bold",
    color: "#A46DA8",
    textAlign: "center",
  },
  box: {
    padding: 20,
    top: 30,
  },
  scrollView: {
    marginTop: 15,
    marginBottom: 15,
    paddingRight: 20,
    left: 5,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  standardtext: {
    fontSize: 20,
    fontWeight: "500",
  },
  dateTextStyle: {
    textAlign: "right",
    color: "#C8A2C8",
    fontSize: 17,
    fontWeight: "bold",
  },
  newTaskButton: {
    width: "40%",
    height: 45,
    backgroundColor: "#C8A2C8",
    borderRadius: 20,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  buttonView: {
    alignItems: "center",
    marginBottom: 15,
  },
  taskBox: {
    borderRadius: 15,
    backgroundColor: "#FAF2FB",
    padding: 10,
    marginTop: 7,
    marginBottom: 7,
    flexDirection: "row",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A46DA8",
    padding: 5,
  },
  taskDesc: {
    fontSize: 15,
    fontWeight: "700",
    padding: 5,
    color: "#C8A2C8",
  },
  taskTime: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
    color: "#C8A2C8",
  },
  testView: {
    height: "75%",
  },
  checkBoxContainer: {
    justifyContent: "center",
  },
  checkBox: {
    margin: 5,
    borderRadius: 30,
    backgroundColor: "white",
    borderColor: "#C8A2C8",
    borderWidth: 2,
    width: 20,
    height: 20,
  },
  completed: {
    fontSize: 23,
    fontWeight: "700",
    margin: 15,
  },
});
