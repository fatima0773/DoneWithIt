import * as Actions from "./actions";

export const addTask = (i) => {
  return async (dispatch) => {
    dispatch({
      type: Actions.ADD_TASK,
      payload: i,
    });
  };
};

export const markTaskDone = (k) => {
  return async (dispatch) => {
    dispatch({
      type: Actions.MARK_TASK_DONE,
      key: k,
    });
  };
};

export const markTaskUnDone = (k) => {
  return async (dispatch) => {
    dispatch({
      type: Actions.MARK_TASK_UNDONE,
      key: k,
    });
  };
};
