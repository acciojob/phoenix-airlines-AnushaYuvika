import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
name: "flight",
initialState: {
searchData: {        
trip: "",
source: "",
destination: "",
date: "",
flightName: ""
},
user: {}
},
reducers: {
setSearchData: (state, action) => {
state.searchData = action.payload;   
},
setUserData: (state, action) => {
state.user = action.payload;
}
}
});

export const { setSearchData, setUserData } = flightSlice.actions;
export default flightSlice.reducer;
