import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
  name: "transactions",

  initialState: {
    items: [],
  },

  reducers: {
    addTransaction: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    delTransaction: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const { addTransaction, delTransaction } = transactionsSlice.actions;
