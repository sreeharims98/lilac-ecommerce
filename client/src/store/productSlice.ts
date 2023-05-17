import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../types/index";
import productServices from "../services/productServices";

interface ProductSliceState {
  products: ProductState[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductSliceState = {
  products: [],
  loading: false,
  error: null,
};

export const getAllProducts = createAsyncThunk<
  ProductState[],
  unknown,
  { rejectValue: string }
>("product/getAllProducts", async (_, thunkApi) => {
  try {
    const userData = await productServices.getAllProducts();
    console.log(userData);
    return userData as ProductState[];
    // storage.setItem(STORAGE_KEYS.AUTH, userData);
    // return userData as userState;
  } catch (error: any) {
    const err: string = error?.response?.data?.message || "Failed to login!";
    return thunkApi.rejectWithValue(err);
  }
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // logout: (state) => {
    //   state.user = null;
    // },
    // setError: (state) => {
    //   state.error = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {  } = productSlice.actions;

export default productSlice.reducer;
