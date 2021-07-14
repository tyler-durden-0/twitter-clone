import { all } from 'redux-saga/effects'
import {tweetsSaga} from "./ducks/tweets/sagas";
import {tagsSaga} from "./tags/sagas";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([tweetsSaga(), tagsSaga()])

}