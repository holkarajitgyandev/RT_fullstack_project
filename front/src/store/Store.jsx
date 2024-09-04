import { configureStore } from "@reduxjs/toolkit";
import WatchlistSlicereducer from "./WatchlistSlice";
import numberslicereducer from "./Numberslice";
import showreducer from './tvshowslicer'

export const store= configureStore({
    reducer:{
        mywatchlist:WatchlistSlicereducer,
        counter:numberslicereducer,
        tvshow:showreducer
        
    }
})