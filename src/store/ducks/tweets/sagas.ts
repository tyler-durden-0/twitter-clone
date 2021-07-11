import { takeEvery } from 'redux-saga/effects'
import {TweetsActionsType} from "./actionCreaters";


export function* fetchTweetsRequest() {
    console.log('test')
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}