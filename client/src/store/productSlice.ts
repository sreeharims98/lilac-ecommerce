import { createSlice } from "@reduxjs/toolkit";
import { CartState, ProductState } from "../types/index";
interface ProductSliceState {
  loading: boolean;
  error: string;
  products: ProductState[];
  isOpenProduct: boolean;
  selectedProduct: ProductState | null;
  isOpenCart: boolean;
  cartItems: CartState[];
}

const initialState: ProductSliceState = {
  loading: false,
  error: "",
  products: [],
  isOpenProduct: false,
  selectedProduct: null,
  isOpenCart: false,
  cartItems: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
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
  setLoading,
  onOpenProduct,
  onCloseProduct,
  setSelectedProduct,
  onOpenCart,
  onCloseCart,
  setAllProducts,
  setCartItems,
} = productSlice.actions;

export default productSlice.reducer;
