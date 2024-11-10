import { combineReducers } from "redux";
import IpSlice from "./_ip";
import buttonLoadingSlice from "./button-loading";
import contentLoadingSlice from "./content-loading";
import errorsSlice from "./errors";
import showModalSlice from "./show-modal";
import signupSlice from "./auth/signup";
import loginSlice from "./auth/login";
import signoutSlice from "./auth/signout";
import contractTypeSlice from "./settings/contract-type";
import contractSlice from "./settings/contract";
import resendCodeSlice from "./settings/resend-code";
import forgetPasswordSlice from "./auth/forget-password";
import successMessageSlice from "./success-response";
import changePhoneSlice from "./auth/change-phone";
import userCustomerSlice from "./settings/user-customer";
import companyApplicationSlice from "./application/company-application";
import userInfoSlice from "./settings/user-info";
import requestSlice from "./settings/request";
import customerApplicationSlice from "./application/customer-application";
import professionSlice from "./settings/profession";
import taskSlice from "./helpAndSupport/task";
import changeTokenSlice from "./auth/change-token";
import websiteSlice from "./institutional/website";
import transactionReportSlice from "./reports/transaction";
import bankListSlice from "./settings/bank";
import progressPaymentReportSlice from "./reports/progress-payment";

export const reducers = combineReducers({
  IpSlice,
  buttonLoadingSlice,
  contentLoadingSlice,
  errorsSlice,
  showModalSlice,
  signupSlice,
  loginSlice,
  signoutSlice,
  contractTypeSlice,
  contractSlice,
  resendCodeSlice,
  forgetPasswordSlice,
  successMessageSlice,
  changePhoneSlice,
  userCustomerSlice,
  companyApplicationSlice,
  userInfoSlice,
  requestSlice,
  customerApplicationSlice,
  professionSlice,
  taskSlice,
  changeTokenSlice,
  websiteSlice,
  transactionReportSlice,
  bankListSlice,
  progressPaymentReportSlice,
});

export type RootReducer = ReturnType<typeof reducers>;
