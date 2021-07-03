import React from 'react'

import {IconButton} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar/Avatar'
import Button from '@material-ui/core/Button/Button'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import classNames from "classnames";
import {useHomeStyles} from "../pages/Home";

interface AddTweetFormProps{
    classes: ReturnType<typeof  useHomeStyles>
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes}: AddTweetFormProps): React.ReactElement => {
    const [text, setText] = React.useState<string>('')
    const textLimitPercent = text.length / 280 * 100
    const maxLength = 280 - text.length

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if(e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddTweet = (): void => {
        setText('')
    }

    return(
        <div className={classes.addForm}>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя Username`}
                    src='https://sun9-71.userapi.com/impf/c851416/v851416586/1e8a6b/86K3drulzUE.jpg?size=366x393&quality=96&sign=43981b77b080e0c9c21edff8a762058f&type=album'
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    className={classes.addFormTextarea}
                    placeholder='Что происходит'
                    value={text}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color='primary'>
                        <ImageOutlinedIcon style={{fontSize: 26}} />
                    </IconButton>
                    <IconButton color='primary'>
                        <EmojiIcon style={{fontSize: 26}} />
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text &&
                    <>
                        <span>{maxLength}</span>
                        <div className={classes.addFormCircleProgress}>
                            <CircularProgress
                                variant='static' size={20}
                                thickness={5}
                                value={textLimitPercent > 100 ? 100 : textLimitPercent}
                                style={textLimitPercent >= 100 ? {color: 'red'} : undefined}
                            />
                            <CircularProgress
                                style={{color: 'rgba(0, 0, 0, 0.1)'}}
                                variant='static'
                                size={20}
                                thickness={5}
                                value={100}
                            />
                        </div>
                    </>}
                    <Button
                        onClick={handleClickAddTweet}
                        disabled={textLimitPercent >= 100}
                        color='primary'
                        variant='contained'
                    >
                        Твитнуть
                    </Button>
                </div>
            </div>
        </div>
    )
}