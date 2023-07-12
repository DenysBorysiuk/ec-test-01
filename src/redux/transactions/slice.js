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
    updateTransaction: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const { addTransaction, delTransaction, updateTransaction } =
  transactionsSlice.actions;
