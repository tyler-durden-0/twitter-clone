import React from 'react'
import {
    Container,
    Grid, IconButton, InputAdornment,
    makeStyles,
    Paper, TextField,
    Theme,
    Typography,
    withStyles
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';


import grey from '@material-ui/core/colors/grey'
import {Tweet} from "../components/Tweet";
import {SideMenu} from "../components/SideMenu";
import ListItem from '@material-ui/core/ListItem/ListItem'
import Divider from '@material-ui/core/Divider/Divider'
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar/Avatar'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import List from '@material-ui/core/List/List'
import Button from '@material-ui/core/Button/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import classNames from "classnames";

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main
                },
                '& svg path': {
                    fill: theme.palette.primary.main
                }
            }
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            left: -10,
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
            transition: 'background-color 0.15s ease-in-out'
        }
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: -5
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2)
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0'

    },
    tweetsHeader: {
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0,
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 700
        }
    },
    tweet: {
        display: 'flex',
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)'
        }
    },
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        width: 450
    },
    tweetUserName: {
        color: grey[500]
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 15,
        '& .MuiList-root': {
            paddingTop: 0
        }
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800
        }
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50
        },
        '& .MuiListItemText-root': {
            margin: 0
        },
        '&:hover': {
            backgroundColor: '#edf3f6'
        }
    },
    addForm: {
        padding: 20
    },
    addFormBody: {
        display: 'flex',
        width: '100%'
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none'
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0'
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute'
        }
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center'
    }
}))

const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            padding: 0,
            paddingLeft: 15,
            '&.Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': {
                    borderWidth: 1,
                    borderColor: theme.palette.primary.main
                },
                '& svg path': {
                    fill: theme.palette.primary.main
                },
            },
            '&:hover': {
                '& fieldset': {
                    borderColor: 'transparent'
                }
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1
            }

        }
    },
    '& .MuiOutlinedInput-input': {
        padding: '12px 14px 14px 5px'
    }
}))(TextField);

export const Home = (): React.ReactElement => {
    const classes = useHomeStyles()

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
                                <div className={classes.addFormBody}>
                                    <Avatar
                                        className={classes.tweetAvatar}
                                        alt={`Аватарка пользователя Username`}
                                        src='https://sun9-71.userapi.com/impf/c851416/v851416586/1e8a6b/86K3drulzUE.jpg?size=366x393&quality=96&sign=43981b77b080e0c9c21edff8a762058f&type=album'
                                    />
                                    <TextareaAutosize
                                        className={classes.addFormTextarea}
                                        placeholder='Что происходит'
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
                                        <span>280</span>
                                        <div className={classes.addFormCircleProgress}>
                                            <CircularProgress variant='static' size={20} thickness={4} value={18}/>
                                            <CircularProgress
                                                style={{color: 'rgba(0, 0, 0, 0.1)'}}
                                                variant='static'
                                                size={20}
                                                thickness={4}
                                                value={100}
                                            />
                                        </div>
                                        <Button color='primary' variant='contained'>
                                            Твитнуть
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.addFormBottomLine} />
                        </Paper>
                        {[
                            ...new Array(20).fill(
                                <Tweet
                                    user={{
                                        fullName:'Иван',
                                        userName: 'Чернецкий Иван Романович',
                                        avatarUrl: 'https://sun9-71.userapi.com/impf/c851416/v851416586/1e8a6b/86K3drulzUE.jpg?size=366x393&quality=96&sign=43981b77b080e0c9c21edff8a762058f&type=album'
                                    }}
                                    classes={classes}
                                    text='It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                                />
                            )
                        ]}
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