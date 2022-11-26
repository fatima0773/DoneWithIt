import { ADD_TASK, MARK_TASK_DONE, MARK_TASK_UNDONE } from "./actions";

const initialState = [
  {
    key: "1",
    title: "LA Semester Project",
    description: "Semester project",
    location: "",
    time: "10: 00 am",
    taskStatus: true,
  },
  {
    key: "2",
    title: "FYP Discussion",
    description: "Meeting with Supervisor",
    location: "Conference Room",
    time: "12: 00 pm",
    taskStatus: false,
  },
  {
    key: "3",
    title: "UI Design Session",
    description: "Online training session",
    location: "",
    time: "12: 30 pm",
    taskStatus: false,
  },
  {
    key: "4",
    title: "MLSA Application Deadline",
    description: "Review and submission",
    location: "",
    time: "05: 00 pm",
    taskStatus: false,
  },
  {
    key: "5",
    title: "Task title",
    description: "some description",
    location: "",
    time: "08: 00 pm",
    taskStatus: true,
  },
];

const taskReducer = (state = initialState, action) => {
  const newTask = action.payload;
  const key = action.key;
  switch (action.type) {
    case ADD_TASK:
      return [...state, newTask];

    // mark task done
    case MARK_TASK_DONE: {
      const completedTask = state.find((item) => item.key === key);

      completedTask.taskStatus = true;

      return [...state];
    }

    // mark task undone
    case MARK_TASK_UNDONE: {
      const inCompleteTask = state.find((item) => item.key === key);
      inCompleteTask.taskStatus = false;

      return [...state];
    }

    default:
      return state;
  }
};

export default taskReducer;
