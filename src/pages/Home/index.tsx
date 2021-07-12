import React from 'react'
import {
    Container,
    Grid,
    InputAdornment,
    Paper,
    Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

import {Tweet} from "../../components/Tweet";
import {SideMenu} from "../../components/SideMenu";
import ListItem from '@material-ui/core/ListItem/ListItem'
import Divider from '@material-ui/core/Divider/Divider'
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar/Avatar'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import List from '@material-ui/core/List/List'
import Button from '@material-ui/core/Button/Button'
import {AddTweetForm} from "../../components/AddTweeForm";
import {useHomeStyles} from './theme'
import {SearchTextField} from "../../components/SearchTextField";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreaters";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";



export const Home = (): React.ReactElement => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)

    React.useEffect(()=> {
        dispatch(fetchTweets())
    }, [dispatch])

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper}  variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        <Paper>
                            <div className={classes.addForm}>
                                <AddTweetForm classes={classes} />
                            </div>
                            <div className={classes.addFormBottomLine} />
                        </Paper>
                        {
                            isLoading ? <div className={classes.tweetsCentred}><CircularProgress/></div> : tweets.map((tweet) =>
                                (
                                    <Tweet key={tweet._id} user={tweet.user} classes={classes} text={tweet.text} />
                                    )
                            )
                        }
                    </Paper>
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant='outlined'
                            fullWidth
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader}>
                                <b>Актуальные темы</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary='Минск'
                                        secondary={
                                            <Typography component='span' variant='body2' >
                                                Твитов: 3 982
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component='li'/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary='#коронавирус'
                                        secondary={
                                            <Typography component='span' variant='body2' >
                                                Твитов: 48 892
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component='li'/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary='Беларусь'
                                        secondary={
                                            <Typography component='span' variant='body2' >
                                                Твитов: 10 275
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component='li'/>
                            </List>
                        </Paper>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader}>
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt='Владимир'
                                            src='https://sun9-61.userapi.com/impf/c638624/v638624704/19f5/8GWFZJo6TRM.jpg?size=2560x1920&quality=96&sign=09f5c645ae8c845fffa94866636f765b&type=album'
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary='VladiMIR'
                                        secondary={
                                            <Typography component='span' variant='body2' >
                                                @VladiMIR
                                            </Typography>
                                        }
                                    />
                                    <Button color='primary'>
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                                <Divider component='li'/>
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}