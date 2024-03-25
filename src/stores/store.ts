import { user } from "./user";
import { permission } from "./permission";
import { IRootState } from "@/types/common";
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore<IRootState>({
    reducer: {
        user,
        permission,
    }
})

