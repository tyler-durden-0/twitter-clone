import {call, put, takeLatest} from 'redux-saga/effects'
import {setTweets, setTweetsLoadingState, TweetsActionsType} from "./actionCreaters";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState, TweetsState} from "./contracts/state";


export function* fetchTweetsRequest() {
    try {
        const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets);
        //yield put() - то же самое что и dispatch в redux
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}