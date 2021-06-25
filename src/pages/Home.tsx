import React from 'react'
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

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
    }
}))

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
                <Grid item xs={6}>xs</Grid>
                <Grid item xs={3}>xs</Grid>
            </Grid>
        </Container>
    )
}