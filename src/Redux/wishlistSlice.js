import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
addToWishlist:(state,action)=>{
    state.push(action.payload)
},
removeFromWishlist:(state,action)=>{
    return state.filter(item=>item.id!==action.payload)
}    }
})
export default wishlistSlice.reducer
export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions;