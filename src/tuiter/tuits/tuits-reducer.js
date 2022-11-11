import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {
  deleteTuitThunk,
  findTuitsThunk,
  createTuitThunk,
  updateTuitThunk
} from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
}

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa-logo.jpg",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}



const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers:{
    [findTuitsThunk.pending]:
        (state)=>{state.loading =true
                  state.tuits = []
    },
    [findTuitsThunk.fulfilled]:
        (state,{payload})=>{
                state.loading = false
                state.tuits = payload
    },
    [findTuitsThunk.rejected]:
        (state) =>{
                state.loading = false
    },
    [deleteTuitThunk.fulfilled]:
        (state,{payload})=>{
                state.loading = false
                state.tuits = state.tuits.filter(t=>t._id !== payload)
        },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits.push(payload)
        },
    [updateTuitThunk.fulfilled]:(state,action)=> {
      state.loading = false

      // console.log(action.payload)
      const tuitNdx = state.tuits.findIndex((t) => t._id === action.payload._id)
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...action.payload
      }
    }
  },
  reducers: {
    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.splice(index, 1);
    },

    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    // updateTuit(state, action){
    //   state.loading = false
    //   const tuitNdx = state.tuits.findIndex((t) => t._id === action.payload._id)
    //   state.tuits[tuitNdx] = {
    //     ...state.tuits[tuitNdx],
    //     ...action.payload
    //   }
    // }
  }

});

export const {createTuit,deleteTuit,updateTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
