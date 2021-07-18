import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router-dom';
import  {selectIsTweetLoading, selectTweetData} from "../../../store/ducks/tweet/selectors";
import {fetchTweetData, setTweetData} from "../../../store/ducks/tweet/actionCreaters";
import {useHomeStyles} from "../theme";
import {Avatar, CircularProgress, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";

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
            <Paper className={classes.fullTweet}>
                <div className={classNames(classes.tweetsHeaderUser)}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${tweetData.user.fullName}`}
                        src={tweetData.user.avatarUrl}
                    />
                    <Typography>
                        <b>{tweetData.user.fullName}</b>
                        <div>
                            <span className={classes.tweetUserName}>@{tweetData.user.userName}</span>&nbsp;
                            <span className={classes.tweetUserName}>.</span>&nbsp;
                            <span className={classes.tweetUserName}>1 час</span>
                        </div>
                    </Typography>
                    {/*<div className={classes.tweetFooter}>*/}
                    {/*    <div>*/}
                    {/*        <IconButton color="primary">*/}
                    {/*            <CommentIcon style={{fontSize: 20}} />*/}
                    {/*        </IconButton>*/}
                    {/*        <span>1</span>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <IconButton color="primary">*/}
                    {/*            <RepeatIcon style={{fontSize: 20}} />*/}
                    {/*        </IconButton>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <IconButton color="primary">*/}
                    {/*            <LikeIcon style={{fontSize: 20}} />*/}
                    {/*        </IconButton>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <IconButton color="primary">*/}
                    {/*            <ShareIcon style={{fontSize: 20}} />*/}
                    {/*        </IconButton>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <Typography className={classes.fullTweetText} gutterBottom>
                    {tweetData.text}
                </Typography>
            </Paper>
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