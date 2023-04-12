import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filteredProducts: [],
    isLoading: true,
}

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            console.log('Failed to to fetch products');
            throw new Error('Failed to to fetch products');
        }
        const data = await response.json();
        return data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        filterProducts: (state, action) => {
            const category = action.payload;
           const categoryProducts = state.products.filter((product) => product.category === category);
            state.filteredProducts.push(...categoryProducts)
        },
        unfilterProducts: (state, action) => {
            const category = action.payload;
            state.filteredProducts = state.filteredProducts.filter((product) => product.category !== category)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
          })
          .addCase(getProducts.rejected, (state, action) => {
            console.log(action);
            state.isLoading = false;
          });
    },
});

export const { filterProducts, unfilterProducts } = productsSlice.actions;

export default productsSlice.reducer;
    
