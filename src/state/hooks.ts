import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/** Typed version of useDispatch for Redux actions */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** Typed version of useSelector for accessing Redux state */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;