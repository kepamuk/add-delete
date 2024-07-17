import { Squares } from './ui/Squares';
import { squaresSlice, squaresReducer, squaresActions } from "./model/slice/squaresSlice.ts";
import type { SquareSchema } from './model/types/squaresSchema.ts';

export {
    Squares,
    squaresReducer,
    squaresActions,
    squaresSlice,
    SquareSchema,
};