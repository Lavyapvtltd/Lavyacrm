import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

// Front
import LayoutReducer from "./layouts/reducer";
import calendarSlice from "./calendar/reducer";
import APIKeyslice from "./apiKey/reducer";
import contactslice from "./contact/reducer";
import teamslice from "./team/reducer";
import dashboardslice from "./dashboard/reducer";

// Authentication
import LoginReducer from "./auth/login/reducer";
import AccountReducer from "./auth/register/reducer";
import ForgetPasswordReducer from "./auth/forgetpwd/reducer";
import ProfileReducer from "./auth/profile/reducer";
import productSlices from "./product/reducer";
import categorySlice from "./category/reducer";
import orderSlices from "./order/reducer";
import locationSlices from "./location/reducer";
import hubSlices from "./hub/reducer";
import partnerSlices from "./partner/reducer";
import citySlices from "./city/reducer";
import contentSlices from "./content/reducer";
import offerSlices from "./offer/reducer";
import membershipSlice from "./membership/reducer";
import userSlices from "./user/reducer";

const combinedReducer = combineReducers({
  Layout: LayoutReducer,
  Calendar: calendarSlice,
  APIKey: APIKeyslice,
  Contacts: contactslice,
  Login: LoginReducer,
  Account: AccountReducer,
  ForgetPassword: ForgetPasswordReducer,
  Profile: ProfileReducer,
  Team: teamslice,
  Dashboard: dashboardslice,
  ProductSlice: productSlices,
  CategorySlice: categorySlice,
  order: orderSlices,
  location: locationSlices,
  hub: hubSlices,
  partner: partnerSlices,
  city: citySlices,
  content: contentSlices,
  offer: offerSlices,
  membership: membershipSlice,
  user: userSlices,
});

const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: false });
