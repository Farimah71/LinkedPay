import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState & {
  taskTypes: any;
} = {
  info: {},
  taskTypes: {},
  loading: false,
};

const taskSlice = createSlice({
  initialState,
  name: "task",
  reducers: {
    setTasks: (state, action) => {
      state.info = action.payload;
    },
    setTaskTypes: (state, action) => {
      state.taskTypes = action.payload;
    },
    setTaskLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = taskSlice;
export const { setTasks, setTaskTypes, setTaskLoading } = actions;
export default reducer;
