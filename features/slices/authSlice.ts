import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, SimpleUser } from "../../src/data/types";

const initialState: AuthState = {
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<SimpleUser | null>) {
      state.user = action.payload;
      state.loading = false;
    },
    updateUserDetails(state, action: PayloadAction<SimpleUser>) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setUser, updateUserDetails, setLoading } = authSlice.actions;
export default authSlice.reducer;
