import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './shopping-cart/cartSlice'
import cartUiSlide from './shopping-cart/cartUiSlice'

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        cartUi: cartUiSlide.reducer,
    }
})

export default store