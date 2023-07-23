
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ExchangeI } from "./exchange.interface";

interface InitialStateI {
    exchanges: ExchangeI[]
}

const initialState: InitialStateI = { exchanges: [] }

export const exchangeSlice = createSlice({
    initialState,
    name: "exchange",
    reducers: {
        setExchanges: (state: InitialStateI, action: PayloadAction<ExchangeI[]>) => {
            state.exchanges = [...action.payload, ...state.exchanges]
        }
    }
})

export const { setExchanges } = exchangeSlice.actions
export default exchangeSlice.reducer