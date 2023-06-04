import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListItem {
  id: number;
  width: string;
  color: string;
}

interface ListState {
  listItems: ListItem[];
}

const initialState: ListState = {
  listItems: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ListItem>) => {
      state.listItems.unshift(action.payload);
    },
    removeItem: (state) => {
      state.listItems.pop();
    },

    removeAllItems: (state) => {
      state.listItems = [];
    },
  },
});

export const { addItem, removeItem, removeAllItems } = listSlice.actions;

export default listSlice.reducer;
