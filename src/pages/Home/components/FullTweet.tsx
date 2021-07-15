import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router-dom';
import  {selectIsTweetLoading, selectTweetData} from "../../../store/ducks/tweet/selectors";
import {fetchTweetData, setTweetData} from "../../../store/ducks/tweet/actionCreaters";
import {Tweet} from "../../../components/Tweet";
import {useHomeStyles} from "../theme";
import {CircularProgress} from "@material-ui/core";

export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectIsTweetLoading)
    const params: {id?: string} = useParams()
    const id = params.id

    React.useEffect(() => {
        if(id) {
            dispatch(fetchTweetData(id))
        }

        return () => {
            dispatch(setTweetData(undefined))
        }
    },[dispatch, id])

    if(tweetData) {
        return(
                <div>
                    <Tweet classes={classes} {...tweetData}/>
                </div>
        )
    }

    if(isLoading) {
        return(
            <div className={classes.tweetsCentred}>
                <CircularProgress />
            </div>
        )
    }

    return null
}