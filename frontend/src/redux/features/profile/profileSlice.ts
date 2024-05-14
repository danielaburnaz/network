import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FollowInfo = {
  meToYou: boolean;
  meToYouPending: boolean;
  youToMePending: boolean;
};

type ProfileState = {
  id: number;
  about: string;
  firstName: string;
  lastName: string;
  nickname: string;
  private: boolean;
  followInfo: FollowInfo;
};

type InitialState = {
  value: ProfileState;
};

const initialState: InitialState = {
  value: {
    id: 0,
    about: "",
    firstName: "",
    lastName: "",
    nickname: "",
    private: false,
    followInfo: {
      meToYou: false,
      meToYouPending: false,
      youToMePending: false,
    },
  },
};

const getProfile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    putProfile: (state, action: PayloadAction<ProfileState>) => {
      state.value = {
        ...action.payload,
      };
    },
  },
});

export const { putProfile } = getProfile.actions;

export default getProfile.reducer;
