const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 * Created store
 *  - imported from configureStore() -> import from RTK
 *
 *  Provide my store to app
 *  - <Provider store = {store}/> -> import from react-redux
 *
 * Slice
 *  - createSlice() -> comes from RTK
 *      -createSlice({
 *          name: "",
 *          initialState:
 *          reducers: {
 *              addItem: (state, action)=>{state= action.payload}
 *          }
 *      })
 *    export const {addItem, removeItem} = cartSlice.actions
 *    export default cartSlice().reducer;
 *
 *  Put that slice into store
 *      - {
 *          reducer: {
 *              cart: cartSlice,
 *              user: userSlice
 *          }
 *        }
 */
