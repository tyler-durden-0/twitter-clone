import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import {Typography} from "@material-ui/core";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import {useHomeStyles} from "../pages/Home";

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
    )
}