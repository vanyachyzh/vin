import { createSlice } from "@reduxjs/toolkit";
const vinSlice = createSlice({
    name: "VIN",
    initialState:{
        vin: "JN1AZ4EH7DM430111",
        history: [],
        error: "hidden"
    },
    reducers:{
        addVIN(state, action){
            state.vin = action.payload
        },
        addHistory(state, action){
            state.history = action.payload
        },
        addError(state, action){
            state.error = action.payload
        }
    }
})
export const {addVIN, addHistory, addError} = vinSlice.actions;
export default vinSlice.reducer
