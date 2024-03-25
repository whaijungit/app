import { IPermissionState } from "@/types/common";
import { createSlice } from "@reduxjs/toolkit";

const permissionSlice = createSlice({
    name: 'PREMISSION',
    initialState: {
        menus: [],
        actions: []
    } as IPermissionState,
    reducers: {
        setPermission(state, action) {
            state.menus = action.payload
        },
        setActions(state, action) {
            state.actions = action.payload
        },
    }
})

export const permission = permissionSlice.reducer

export const permissionActions = permissionSlice.actions
