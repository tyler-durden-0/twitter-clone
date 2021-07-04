import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import {useHomeStyles} from "../pages/Home/theme";
import {Button, Hidden} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/CreateOutlined';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <IconButton className={classes.logo} aria-label="delete" color="primary">
                    <TwitterIcon className={classes.logoIcon} />
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant='h6' className={classes.sideMenuListItemLabel}>Поиск</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsNoneOutlinedIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant='h6' className={classes.sideMenuListItemLabel}>Уведомления</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <EmailOutlinedIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant='h6' className={classes.sideMenuListItemLabel}>Соодщения</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkBorderOutlinedIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant='h6' className={classes.sideMenuListItemLabel}>Закладки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListAltOutlinedIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant='h6' className={classes.sideMenuListItemLabel}>Список</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <PersonOutlineOutlinedIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography variant='h6' className={classes.sideMenuListItemLabel}>Профиль</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button className={classes.sideMenuTweetButton} color="primary" variant="contained" fullWidth >
                    <Hidden smDown>
                        Твитнуть
                    </Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
            </li>
        </ul>
    )
}