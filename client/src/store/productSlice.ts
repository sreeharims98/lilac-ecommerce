import { createSlice } from "@reduxjs/toolkit";
import { CartState, ProductState } from "../types/index";
interface ProductSliceState {
  products: ProductState[];
  loading: boolean;
  error: string;
  isOpenProduct: boolean;
  selectedProduct: ProductState | null;
  isOpenCart: boolean;
  cartItems: CartState[];
}

const initialState: ProductSliceState = {
  products: [],
  loading: false,
  error: "",
  isOpenProduct: false,
  selectedProduct: null,
  isOpenCart: false,
  cartItems: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    onOpenProduct: (state) => {
      state.isOpenProduct = true;
    },
    onCloseProduct: (state) => {
      state.isOpenProduct = false;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    onOpenCart: (state) => {
      state.isOpenCart = true;
    },
    onCloseCart: (state) => {
      state.isOpenCart = false;
    },
    setAllProducts: (state, action) => {
      state.products = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onOpenProduct,
  onCloseProduct,
  setSelectedProduct,
  onOpenCart,
  onCloseCart,
  setAllProducts,
  setCartItems,
} = productSlice.actions;

export default productSlice.reducer;
