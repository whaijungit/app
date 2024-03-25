import { IUser, IUserState } from "@/types/common";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'USER',
    initialState: {
        user: null,
        isLogin: false,
    } as IUserState,
    reducers: {
        setUser(state, action: PayloadAction<IUser | null>) {
            state.user = action.payload
        },
        setIsLogin(state, action: PayloadAction<boolean>) {
            state.isLogin = action.payload
        }
    }
})


export const user = userSlice.reducer

export const userActions= userSlice.actions