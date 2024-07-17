import {memo, useCallback, useState} from "react";

import { squaresActions } from "../model/slice/squaresSlice.ts";
import {useAppDispatch, useAppSelector} from "../../../app/Providers/StoreProvider/config/store.ts";
import { getRandomColor } from "../../../shared/lib/getRandomColors/getRandomColors.ts";

import cls from "./Squares.module.scss";
import {classNames} from "../../../shared/lib/classNames/classNames.ts";

export const Squares = memo(() => {
    const squares = useAppSelector(state => state.squares);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [isAnimated, setIsAnimated] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const addSquare = useCallback(() => {
        dispatch(squaresActions.addSquare(getRandomColor()));
        setIsDisabled(true);
        setTimeout(() => setIsDisabled(false), 500);
    }, []);

    const removeSquare = useCallback(() => {
        setIsAnimated(true);
        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);
            setIsAnimated(false);
            dispatch(squaresActions.deleteSquare());
        }, 500);
    }, []);

    return (
        <div className={cls.entityContainer}>
            <div className={cls.btnsContainer}>
                <button className={cls.btn} onClick={addSquare} disabled={isDisabled}>
                    add
                </button>
                <button className={cls.btn} onClick={removeSquare} disabled={isDisabled || squares.length < 1}>
                    delete
                </button>
            </div>
            <div className={cls.squaresContainer}>
                {squares.map((item, index) => (
                    <div
                        key={item.id}
                        className={classNames(cls.square, {[cls.squareExit]: index === squares.length - 1 && isAnimated})}
                        style={{
                            backgroundColor: item.color,
                            transform: (index === squares.length - 1 && isAnimated)
                                ? index > 4 ? "translateX(100%)" : `translateX(calc(100vw - ${index} * (20vw + 1rem)))`
                                : "none"
                        }}
                    />
                ))}
            </div>
        </div>
    )
})