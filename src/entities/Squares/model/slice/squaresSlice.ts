import { ISquare } from "../types/squaresSchema.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: ISquare[] = [];

export const squaresSlice = createSlice({
    name: "squaresSlice",
    initialState,
    reducers: {
        addSquare: (state, action: PayloadAction<string>) => {
            state.unshift({id: uuidv4(), color: action.payload});
        },
        deleteSquare: (state) => {
            state.pop();
        },
    },
})

export const { actions: squaresActions } = squaresSlice;
export const { reducer: squaresReducer } = squaresSlice;