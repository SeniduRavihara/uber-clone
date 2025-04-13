import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type Point = {
  lat: number; // Latitude
  lng: number; // Longitude
};

export interface NavState {
  origin: {
    location: Point | undefined;
    description: string;
  } | null;
  destination: {
    location: Point | undefined;
    description: string;
  } | null;
  travelTimeInformation: string | null;
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (
      state,
      action: PayloadAction<{
        location: Point | undefined;
        description: string;
      } | null>
    ) => {
      state.origin = action.payload;
    },
    setDestination: (
      state,
      action: PayloadAction<{
        location: Point | undefined;
        description: string;
      } | null>
    ) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<string | null>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state: { nav: NavState }) => state.nav.origin;
export const selectDestination = (state: { nav: NavState }) =>
  state.nav.destination;
export const selectTravelTimeInformation = (state: { nav: NavState }) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
