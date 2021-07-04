import React from 'react'
import classNames from "classnames";
import {Avatar, Grid, Paper, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import {useHomeStyles} from "../pages/Home/theme";


interface TweetProps {
    text: string
    classes: ReturnType<typeof useHomeStyles>
    user: {
        fullName: string
        userName: string
        avatarUrl: string
    }
}

export const Tweet: React.FC<TweetProps> = ({text, user, classes}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant='outlined'>
            <Avatar
                className={classes.tweetAvatar}
                alt={`Аватарка пользователя ${user.fullName}`}
                src={user.avatarUrl}
            />
            <div>
                <Typography>
                    <b>{user.fullName}</b>
                    <span className={classes.tweetUserName}>@{user.userName}</span>&nbsp;
                    <span className={classes.tweetUserName}>.</span>&nbsp;
                    <span className={classes.tweetUserName}>1 час</span>
                </Typography>
                <Typography variant='body1' gutterBottom>
                    {text}
                </Typography>
                <div className={classes.tweetFooter}>
                    <div>
                        <IconButton color="primary">
                            <CommentIcon style={{fontSize: 20}} />
                        </IconButton>
                        <span>1</span>
                    </div>
                    <div>
                        <IconButton color="primary">
                            <RepeatIcon style={{fontSize: 20}} />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton color="primary">
                            <LikeIcon style={{fontSize: 20}} />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton color="primary">
                            <ShareIcon style={{fontSize: 20}} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </Paper>
    )
}