import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import DailyPlanner from "../Screens/Daily Planner/DailyPlanner";
import AddNewTask from "../Screens/Daily Planner/AddNewTask";
import ViewTask from "../Screens/Daily Planner/ViewTask";

const screens = {
  DailyPlanner: {
    screen: DailyPlanner,
  },
  AddNewTask: {
    screen: AddNewTask,
  },
  ViewTask: {
    screen: ViewTask,
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigavtionOptions: {
    headerShown: false,
  },
  navigationOptions: { header: { visible: false } },
});

export default createAppContainer(HomeStack);
