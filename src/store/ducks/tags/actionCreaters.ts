import {LoadingState, TagsState} from "./contracts/state";
import {Action} from "redux";

export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE'
}

export interface FetchTagsActionsInterface extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS
}

export interface SetTagsActionsInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS
    payload: TagsState['items']
}

export interface SetTagsLoadingActionsInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATE
    payload: LoadingState
}

export const setTags = (payload: TagsState['items']): SetTagsActionsInterface => ({
    type: TagsActionsType.SET_TAGS,
    payload
})

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingActionsInterface => ({
    type: TagsActionsType.SET_LOADING_STATE,
    payload
})

export const fetchTags = (): FetchTagsActionsInterface => ({
    type: TagsActionsType.FETCH_TAGS
})

export type TagsActions = SetTagsActionsInterface | SetTagsLoadingActionsInterface | FetchTagsActionsInterface