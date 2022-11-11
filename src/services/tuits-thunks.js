import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk('tuits/deleteTuit', async (tid)=> await service.deleteTuit(tid)
)

export const createTuitThunk  = createAsyncThunk('tuits/createTuit',async (newTuit)=>{

  return await service.createTuit(newTuit)
})

export const updateTuitThunk = createAsyncThunk('tuits/updateTuit',async (tuit)=>{
  return await service.updateTuit(tuit)


})