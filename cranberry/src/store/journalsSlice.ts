import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { compareDesc } from "date-fns";
import JournalService from "../services/journal.service";
import { type IJournal } from "../types";

const initialState: JournalsState = {
  userJournals: [],
  currentJournal: {
    date: "",
    cravingIntensity: 0,
    cigsSmoked: 0,
    notes: "",
    userId: ""
  },
  isLoading: false,
};

interface JournalsState {
  userJournals: IJournal[];
  currentJournal: IJournal;
  isLoading: boolean;
}

// CRUD THUNKS

export const fetchUserJournals = createAsyncThunk(
  'journals/fetchJournals',
  async (userId: string, thunkAPI) => {
    try {
      const { data } = await JournalService.getUserJournals(userId);
      const journals = data.data;
      return journals;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createJournal = createAsyncThunk(
  'journals/createJournal',
  async ({ userId, journalData }: { userId: string, journalData: IJournal }, thunkAPI) => {
    try {
      const { data } = await JournalService.createUserJournal(userId, journalData);
      const newJournal = data.data;
      return newJournal;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const editJournal = createAsyncThunk(
  'journals/editJournal',
  async (journalData: IJournal, thunkAPI) => {
    try {
      await JournalService.updateUserJournal(journalData);
      return journalData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const deleteJournal = createAsyncThunk(
  'journals/deleteJournal',
  async ({ userId, journalId }: { userId: string, journalId: number}, thunkAPI) => {
    try {
      await JournalService.deleteUserJournal(userId, journalId);
      return journalId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const journalsSlice = createSlice({
  name: 'journals',
  initialState,
  reducers: {
    setUserJournals: (state, { payload }: { payload: IJournal[] }) => {
      state.userJournals = payload;
    },
    setCurrentJournal: (state, action) => {
      state.currentJournal = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // ## FETCH USER JOURNALS ##
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
      // ## FETCH USER JOURNAL (singular) ##
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
      // ## CREATE JOURNAL ##
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
        state.currentJournal = newJournal;
      })
      .addCase(createJournal.rejected, (state, payload) => {
        state.isLoading = false;
        console.log('Error creating new journal: ', payload);
      })
      // ## EDIT JOURNAL ##
      .addCase(editJournal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJournal.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        const jIndex = state.userJournals.findIndex(journal => journal.journalId === payload.journalId);
        const updatedJournalList = [...state.userJournals];
        updatedJournalList[jIndex] = payload;

        state.userJournals = updatedJournalList;
        state.currentJournal = payload;
      })
      .addCase(editJournal.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log('Error editing journal: ', payload);
      })
      // ## DELETE JOURNAL ##
      .addCase(deleteJournal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJournal.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const id = payload;
        const updatedJournalList = state.userJournals.filter((journal) => journal.journalId !== id);
        state.userJournals = updatedJournalList;
      })
      .addCase(deleteJournal.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log('Error deleting journal: ', payload);
      })
  }
});

// export const selectJournals = (state: RootState) => state.journals;
export const { setUserJournals, setCurrentJournal } = journalsSlice.actions;
export default journalsSlice.reducer;