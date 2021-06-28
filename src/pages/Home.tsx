import React from 'react'
import {
    Container,
    createStyles,
    Grid,
    InputBase,
    makeStyles,
    Paper,
    Theme,
    Typography,
    withStyles
} from "@material-ui/core";
import grey from '@material-ui/core/colors/grey'
import {Tweet} from "../components/Tweet";
import {SideMenu} from "../components/SideMenu";

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
    tweet: {
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)'
        }
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5)
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
    const classes = useHomeStyles()

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper}  variant='outlined'>
                        <Paper className={classes.tweetsHeader} variant='outlined'>
                            <Typography variant='h6'>Главная</Typography>
                        </Paper>
                        <Tweet
                            user={{
                                fullName:'Иван',
                                userName: 'Чернецкий Иван Романович',
                                avatarUrl: 'https://sun9-71.userapi.com/impf/c851416/v851416586/1e8a6b/86K3drulzUE.jpg?size=366x393&quality=96&sign=43981b77b080e0c9c21edff8a762058f&type=album'
                            }}
                            classes={classes}
                            text='It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        />
                        <Tweet
                            user={{
                                fullName:'Иван',
                                userName: 'Чернецкий Иван Романович',
                                avatarUrl: 'https://sun9-71.userapi.com/impf/c851416/v851416586/1e8a6b/86K3drulzUE.jpg?size=366x393&quality=96&sign=43981b77b080e0c9c21edff8a762058f&type=album'
                            }}
                            classes={classes}
                            text='It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        />
                        <Tweet
                            user={{
                                fullName:'Иван',
                                userName: 'Чернецкий Иван Романович',
                                avatarUrl: 'https://sun9-71.userapi.com/impf/c851416/v851416586/1e8a6b/86K3drulzUE.jpg?size=366x393&quality=96&sign=43981b77b080e0c9c21edff8a762058f&type=album'
                            }}
                            classes={classes}
                            text='It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        />
                        <Tweet
                            user={{
                                fullName:'Иван',
                                userName: 'Чернецкий Иван Романович',
                                avatarUrl: 'https://sun9-71.userapi.com/impf/c851416/v851416586/1e8a6b/86K3drulzUE.jpg?size=366x393&quality=96&sign=43981b77b080e0c9c21edff8a762058f&type=album'
                            }}
                            classes={classes}
                            text='It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        />
                        <Tweet
                            user={{
                                fullName:'Иван',
                                userName: 'Чернецкий Иван Романович',
                                avatarUrl: 'https://sun9-71.userapi.com/impf/c851416/v851416586/1e8a6b/86K3drulzUE.jpg?size=366x393&quality=96&sign=43981b77b080e0c9c21edff8a762058f&type=album'
                            }}
                            classes={classes}
                            text='It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        />
                        <Tweet
                            user={{
                                fullName:'Иван',
                                userName: 'Чернецкий Иван Романович',
                                avatarUrl: 'https://sun9-71.userapi.com/impf/c851416/v851416586/1e8a6b/86K3drulzUE.jpg?size=366x393&quality=96&sign=43981b77b080e0c9c21edff8a762058f&type=album'
                            }}
                            classes={classes}
                            text='It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <CssTextField fullWidth placeholder="Поиск по Твиттеру" />
                </Grid>
            </Grid>
        </Container>
    )
}