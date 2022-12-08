import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, RootDispatch } from "../store";


export const AppDispatch = () => useDispatch<RootDispatch>()
export const AppSelector: TypedUseSelectorHook<RootState> = useSelector