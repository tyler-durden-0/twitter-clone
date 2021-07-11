import axios from 'axios'
import { call, takeLatest } from 'redux-saga/effects'
import {TweetsActionsType} from "./actionCreaters";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {TweetsState} from "./contracts/state";


export function* fetchTweetsRequest() {
    const data: TweetsState['items'] = yield call(TweetsApi.fetchTweets);
    console.log(data)
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}