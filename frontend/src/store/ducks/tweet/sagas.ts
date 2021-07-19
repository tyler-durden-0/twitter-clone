import {call, put, takeLatest} from 'redux-saga/effects'
import {setTweetData, setTweetLoadingState} from "./actionCreaters";
import {LoadingState} from "./contracts/state";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {FetchTweetDataActionsInterface, TweetActionsType} from "./contracts/actionTypes";
import {Tweet} from "../tweets/contracts/state";


export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetDataActionsInterface) {
    try {
        const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweetData(data[0]))
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}