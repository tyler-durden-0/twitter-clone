import React from 'react'
import {makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    blueSide:{
        backgroundColor: '#1DA1F2'
    },
    loginSide: {

    }
}))

function SignIn() {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <ul>
                    <li>
                        <Typography>Чиатйте то что, вам интересно</Typography>
                    </li>
                    <li>
                        <Typography>Узнайте, о чем говорят в мире</Typography>
                    </li>
                    <li>
                        <Typography>Присоединяйтесь к общению</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <TwitterIcon />
            </section>
        </div>
    )
}

export default SignIn
