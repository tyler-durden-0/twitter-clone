import { TweetsState} from "../../store/ducks/tweets/contracts/state";
import axios from "axios";

export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('/tweets').then(({data}) => data)
    }
}