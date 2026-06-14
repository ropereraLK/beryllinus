import { configureStore } from "@reduxjs/toolkit"
import authReducer from "@/features/auth/model/authSlice"


//Redux Store
export const store = configureStore({
    reducer: {
        // Reducer slices are listed here
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
