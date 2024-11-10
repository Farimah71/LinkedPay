import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/initial-state.type";

const initialState: InitialState & {
  identityTax: {};
  companyInformationInfo: any;
  authorizeInformation: any;
  RegistrationFile: any;
  error: string | string[];
} = {
  info: {},
  identityTax: {},
  companyInformationInfo: {},
  authorizeInformation: {},
  RegistrationFile: {},
  step: 1,
  loading: false,
  error: "",
};

const companyApplicationSlice = createSlice({
  initialState,
  name: "companyApplication",
  reducers: {
    setCompanyApplicationInfo: (state, action) => {
      state.info = action.payload;
    },
    setCompanyInformationInfo: (state, action) => {
      state.companyInformationInfo = action.payload;
    },
    setCompanyApplicationStep: (state, action: { payload: number }) => {
      state.step = action.payload;
    },
    setIdentityTax: (state, action) => {
      state.identityTax = action.payload;
    },
    setAuthorizeInformation: (state, action) => {
      state.authorizeInformation = action.payload;
    },
    setCompanyApplicationError: (state, action) => {
      state.error = action.payload;
    },
    setRegistrationFile: (state, action) => {
      state.RegistrationFile = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

const { reducer, actions } = companyApplicationSlice;
export const {
  setCompanyApplicationInfo,
  setCompanyInformationInfo,
  setIdentityTax,
  setAuthorizeInformation,
  setCompanyApplicationStep,
  setRegistrationFile,
  setCompanyApplicationError,
  setLoading,
} = actions;
export default reducer;
