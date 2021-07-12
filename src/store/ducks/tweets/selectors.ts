import {TweetsState} from "./contracts/state";
import {RootState} from "../../store";
import {createSelector} from "reselect";

export const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items)

export const selectLoadingState = (state: RootState) => selectTweets(state).loadingState