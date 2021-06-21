import React from 'react'
import {Button, Dialog, FormControl, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    blueSide:{
        backgroundColor: '#71C9F8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative'
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350%',
        height: '350%'
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
        }
    },
    blueSideListInfoItem: {
        marginBottom: 40
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%'
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20
    }
}))

function SignIn() {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem} >
                        <Typography variant="h6"><SearchIcon className={classes.blueSideListInfoIcon} />Чиатйте о том что, вам интересно</Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem} >
                        <Typography variant="h6"><PeopleIcon className={classes.blueSideListInfoIcon} />Узнайте, о чем говорят в мире</Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem} >
                        <Typography variant="h6"><MessageIcon className={classes.blueSideListInfoIcon} />Присоединяйтесь к общению</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} variant="h4" gutterBottom>Узнай, что происходит в мире прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br />
                    <Button style={{marginBottom: 20}} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button variant="outlined" color="primary" fullWidth>Войти</Button>
                    <Dialog>
                        <DialogTitle id="form-dialog-title">
                            <IconButton>
                                <CloseIcon></CloseIcon>
                            </IconButton>
                            Настройка поиска
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To subscribe to this website, please entery ...
                                updates occasionally
                            </DialogContentText>
                            <FormControl component="fieldset" fullWidth>
                                <FormGroup aria-label="position" row>
                                    <TextField>
                                        <div>
                                            <div>
                                                <FormLabel>
                                                    Скрыть содержимое
                                                    <CheckBox color="primary" />
                                                </FormLabel>
                                                <Typography variant="body2">
                                                    Предотвражает появление содержимого поиска
                                                </Typography>
                                            </div>
                                        </div>
                                        <Radio value="a" name="radio-button-de...." ></Radio>
                                    </TextField>
                                </FormGroup>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handeClose} variant="contained">
                                Subscribe
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </section>
        </div>
    )
}

export default SignIn
