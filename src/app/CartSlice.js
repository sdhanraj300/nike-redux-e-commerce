import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalAmount: 0,
  cartTotalQTY: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`${action.payload.title} quantity increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.cartItems = removeItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} removed from Cart`);
    },
    setIncreaseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`${action.payload.title} quantity increased`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success(`${action.payload.title} quantity decreased`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setClearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart cleared`);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;
          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
      state.cartTotalQTY = totalQTY;
    },
  },
});
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQTY;
export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQty,
  setDecreaseItemQty,
  setClearCartItems,
  setGetTotals,
} = CartSlice.actions;
export default CartSlice.reducer;
