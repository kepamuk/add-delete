import { StateSchema } from "./StateSchema.ts";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { squaresReducer } from "../../../../entities/Squares";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        squares: squaresReducer,
    };


    const store = configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
    })

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;