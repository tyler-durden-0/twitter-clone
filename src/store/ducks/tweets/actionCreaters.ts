import {LoadingState, Tweet, TweetsState} from "./contracts/state";
import {Action} from "redux";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET'
}

export interface FetchTweetsActionsInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS
}

export interface SetTweetsActionsInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS
    payload: TweetsState['items']
}

export interface FetchAddTweetActionsInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEET
    payload: string
}

export interface AddTweetActionsInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEET
    payload: Tweet
}

export interface SetTweetsLoadingActionsInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE
    payload: LoadingState
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionsInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
})

export const fetchAddTweet = (payload: string): FetchAddTweetActionsInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload
})

export const addTweet = (payload: Tweet): AddTweetActionsInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingActionsInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload
})

export const fetchTweets = (): FetchTweetsActionsInterface => ({
    type: TweetsActionsType.FETCH_TWEETS
})

export type TweetsActions = SetTweetsActionsInterface | SetTweetsLoadingActionsInterface | FetchTweetsActionsInterface