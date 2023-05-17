import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartState, ProductState } from "../types/index";
import productServices from "../services/productServices";
import { toast } from "react-toastify";

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

export const getAllProducts = createAsyncThunk<
  ProductState[],
  unknown,
  { rejectValue: string }
>("product/getAllProducts", async (_, thunkApi) => {
  try {
    const userData = await productServices.getAllProducts();
    return userData;
    // storage.setItem(STORAGE_KEYS.AUTH, userData);
    // return userData as userState;
  } catch (error: any) {
    const err: string =
      error?.response?.data?.message || "Something went wrong!";
    toast.error(err);

    return thunkApi.rejectWithValue(err);
  }
});

export const getCartItems = createAsyncThunk<
  CartState[],
  string,
  { rejectValue: string }
>("product/getCartItems", async (userId, thunkApi) => {
  try {
    const { items } = await productServices.getCartItems(userId);
    return items;
    // storage.setItem(STORAGE_KEYS.AUTH, userData);
    // return userData as userState;
  } catch (error: any) {
    const err: string = error?.response?.data?.error || "Something went wrong!";
    toast.error(err);

    return thunkApi.rejectWithValue(err);
  }
});

export const addToCart = createAsyncThunk<
  CartState[],
  {
    userId: string;
    productId: string;
    quantity: number;
    onCloseModal?: () => void;
  },
  { rejectValue: string }
>(
  "product/addToCart",
  async ({ userId, productId, quantity, onCloseModal }, thunkApi) => {
    try {
      const res = await productServices.addToCart({
        userId,
        productId,
        quantity,
      });
      if (quantity === 0) {
        toast.success("Item removed from cart!");
      } else {
        toast.success("Item added to cart!");
      }
      if (res && onCloseModal) {
        onCloseModal();
      }

      return res?.items;
    } catch (error: any) {
      const err: string =
        error?.response?.data?.error || "Something went wrong!";
      toast.error(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);

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
  },
  extraReducers: (builder) => {
    builder
      //getAllProducts
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //getCartitems
      .addCase(getCartItems.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //addToCart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  onOpenProduct,
  onCloseProduct,
  setSelectedProduct,
  onOpenCart,
  onCloseCart,
} = productSlice.actions;

export default productSlice.reducer;
