import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import middlewares from "./middlewares";
import { announcementRTKProvider } from "./rtk/announcement";
import exchangeReducer from "./slices/exchange.slice";

export const store = configureStore({
    reducer:{
        [announcementRTKProvider.reducerPath]: announcementRTKProvider.reducer,
        exchange: exchangeReducer,


    },
    middleware: (gDM) => {
        return gDM().concat(middlewares);
    },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
