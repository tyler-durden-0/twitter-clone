import React from 'react'
import {
    Avatar,
    Container,
    createStyles,
    Grid,
    InputBase,
    makeStyles,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import grey from '@material-ui/core/colors/grey'
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

const useHoeStyles = makeStyles(() => ({
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
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center'
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    sideMenuListItemIcon: {
        fontSize: 28
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
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 450
    },
    tweetUserName: {
        color: grey[500]
    }
}))

const CssTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0
        }
    })
)(InputBase);

export const Home = () => {
    const classes = useHoeStyles()

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton className={classes.logo} aria-label="delete" color="primary">
                                <TwitterIcon className={classes.logoIcon} />
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <SearchIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>Поиск</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <NotificationsNoneOutlinedIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>Уведомления</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <EmailOutlinedIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>Соодщения</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <BookmarkBorderOutlinedIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>Закладки</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <ListAltOutlinedIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>Список</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <PersonOutlineOutlinedIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography variant='h6' className={classes.sideMenuListItemLabel}>Профиль</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper}  variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Grid container spacing={3}>
                                <Grid item xs={1}>
                                    <Avatar
                                        alt="User Avatar"
                                        src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=579&q=80"
                                         />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography><b>mxhxvoid</b> <span className={classes.tweetUserName}>@mahavoid</span></Typography>
                                    <Typography variant='body1' gutterBottom>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </Typography>
                                    <div className={classes.tweetFooter}>
                                        <div>
                                            <IconButton>
                                                <CommentIcon style={{fontSize: 20}} />
                                            </IconButton>
                                            <span>1</span>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <RepeatIcon style={{fontSize: 20}} />
                                            </IconButton>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <LikeIcon style={{fontSize: 20}} />
                                            </IconButton>
                                        </div>
                                        <div>
                                            <IconButton>
                                                <ShareIcon style={{fontSize: 20}} />
                                            </IconButton>
                                        </div>
                                    </div>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <CssTextField fullWidth placeholder="Поиск по Твиттеру" />
                </Grid>
            </Grid>
        </Container>
    )
}