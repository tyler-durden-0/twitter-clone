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
                            <AddTweetForm classes={classes} />
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