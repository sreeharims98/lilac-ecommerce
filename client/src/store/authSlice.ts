import { createSlice } from "@reduxjs/toolkit";
import { storage } from "../utils/storageUtils";
import { STORAGE_KEYS } from "../data/constants";
import { UserState } from "../types";

interface AuthSliceState {
  user: UserState | null;
}

const user = storage.getItem(STORAGE_KEYS.AUTH);

const initialState: AuthSliceState = {
  user: user,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      storage.setItem(STORAGE_KEYS.AUTH, action.payload);
    },
    logout: (state) => {
      state.user = null;
      storage.clearAll();
    },
  },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
