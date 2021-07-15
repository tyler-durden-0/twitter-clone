import {LoadingState, TweetState} from "./contracts/state";
import {
    FetchTweetDataActionsInterface,
    SetTweetDataActionsInterface,
    SetTweetLoadingActionsInterface, TweetActionsType
} from "./contracts/actionTypes";

export const setTweetData = (payload: TweetState['data']): SetTweetDataActionsInterface => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload
})

export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingActionsInterface => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload
})

export const fetchTweetData = (payload: string): FetchTweetDataActionsInterface => ({
    type: TweetActionsType.FETCH_TWEET_DATA,
    payload
})

export type TweetActions = SetTweetDataActionsInterface | SetTweetLoadingActionsInterface | FetchTweetDataActionsInterface