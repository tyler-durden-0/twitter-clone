import {call, put, takeLatest} from 'redux-saga/effects'
import {
    addTweet, setAddFormState,
    setTweets,
    setTweetsLoadingState
} from "./actionCreaters";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingState, Tweet, TweetsState} from "./contracts/state";
import {FetchAddTweetActionsInterface, TweetsActionsType} from "./contracts/actionTypes";

export function* fetchTweetsRequest() {
    try {
        const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets);
        //yield put() - то же самое что и dispatch в redux
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({payload}: FetchAddTweetActionsInterface) {
    try {
        const data = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullName: "Test user",
                userName: "test",
                avatarUrl: "https://source.unsplash.com/random/100x100?5"
            }
        }
        const item: Tweet = yield call(TweetsApi.addTweet, data);
        yield put(addTweet(item))
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}