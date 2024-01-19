import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { compareDesc } from "date-fns";
import JournalService from "../services/journal.service";
import { type IJournal } from "../types";

const initialState: JournalsState = {
  userJournals: [],
  currentJournal: {},
  isLoading: false,
};

interface JournalsState {
  userJournals: IJournal[];
  currentJournal: IJournal | {};
  isLoading: boolean;
}

export const fetchUserJournals = createAsyncThunk(
  'journals/fetchJournals',
  async (userId: string, thunkAPI) => {
    try {
      const { data } = await JournalService.getUserJournals(userId);
      const journals = data.data;
      return journals;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchJournal = createAsyncThunk(
  'journals/fetchJournal',
  async ({ userId, journalId }: { userId: string, journalId: number}, thunkAPI) => {
    try {
      const { data } = await JournalService.getUserJournal(userId, journalId);
      const journal = data.data;
      return journal;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createJournal = createAsyncThunk(
  'journals/createJournal',
  async ({ userId, journalData }: { userId: string, journalData: IJournal }, thunkAPI) => {
    const { data } = await JournalService.createUserJournal(userId, journalData);
    const newJournal = data.data;
    return newJournal;
  }
)

const journalsSlice = createSlice({
  name: 'journals',
  initialState,
  reducers: {
    setUserJournals: (state, action) => {
      state.userJournals = action.payload;
    },
    setCurrentJournal: (state, action) => {
      state.currentJournal = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserJournals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserJournals.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userJournals = payload.sort((a: IJournal, b: IJournal) => compareDesc(new Date(a.date), new Date(b.date)));
      })
      .addCase(fetchUserJournals.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log('Error fetching user journals: ', payload);
      })
      .addCase(fetchJournal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJournal.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentJournal = payload;
      })
      .addCase(fetchJournal.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log('Error fetching user journal: ', payload);
      })
      .addCase(createJournal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJournal.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        
        const userJournals = state.userJournals;
        const newJournal = payload;

        const updatedJournalList = [...userJournals, newJournal]
          .sort((a: IJournal, b: IJournal) => compareDesc(new Date(a.date) , new Date(b.date)));
        state.userJournals = updatedJournalList;
      })
      .addCase(createJournal.rejected, (state, payload) => {
        state.isLoading = false;
        console.log('Error creating new journal: ', payload);
      })
  }
});

// export const selectJournals = (state: RootState) => state.journals;
export const { setUserJournals, setCurrentJournal } = journalsSlice.actions;
export default journalsSlice.reducer;