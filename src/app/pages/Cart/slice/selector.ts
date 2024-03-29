import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

import { initialState } from ".";

const selectSlice = (state: RootState) => state.cartState || initialState;

export const selectOrder = createSelector([selectSlice], (state) => state);
