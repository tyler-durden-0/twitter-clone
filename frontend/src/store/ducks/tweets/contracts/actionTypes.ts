import {Action} from "redux";
import {AddFormState, LoadingState, Tweet, TweetsState} from "./state";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET',
    SET_ADD_FORM_TWEET = 'tweets/SET_ADD_FORM_TWEET'
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

export interface SetAddFormActionsInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_TWEET
    payload: AddFormState
}

export interface SetTweetsLoadingActionsInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE
    payload: LoadingState
}