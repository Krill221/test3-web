import React, { useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AuthContext } from '../__providers/authProvider';
import { makeStyles } from '@material-ui/core/styles';
import {
    Toolbar, Typography, Button,
    BottomNavigation, BottomNavigationAction
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TopAppBar from '../__views/web/material/helpers/AppBarTop';
import PeopleIcon from '@material-ui/icons/People';

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 1000,
    },
}));


const Layout = ({ history }) => {
    const { user } = useContext(AuthContext);
    const classes = useStyles();
    const theme = useTheme();
    const is_mobile = useMediaQuery(theme.breakpoints.up('sm'));
    const value = `/${history.location.pathname.split('/')[1]}`;
    return (
        <React.Fragment>
            {is_mobile ?
                <TopAppBar position="sticky">
                    <Toolbar id="menu">
                        <Button color={(value === '/' ? 'primary' : 'inherit')} component={Link} to='/' startIcon={<HomeIcon />}>{theme.props.menu.Main}</Button>
                        <Button color={(value === '/users' ? 'primary' : 'inherit')} component={Link} to='/users' startIcon={<PeopleIcon />}>{theme.props.menu.Users}</Button>
                        <Button color={(value === '/rooms' ? 'primary' : 'inherit')} component={Link} to='/rooms' startIcon={<PeopleIcon />}>{theme.props.menu.Rooms}</Button>
                        <Button color={(value === '/comments' ? 'primary' : 'inherit')} component={Link} to='/comments' startIcon={<PeopleIcon />}>{theme.props.menu.Comments}</Button>
                        <Typography style={{ flexGrow: 1 }} variant="h5" noWrap />
                        <Button color={(value === '/profile' ? 'primary' : 'inherit')} component={Link} value='/profile' to='/profile' startIcon={<AccountCircleIcon />} >{user ? theme.props.menu.Profile : theme.props.menu.SignIn}</Button>
                    </Toolbar>
                </TopAppBar>
                :
                <BottomNavigation
                    className={classes.stickToBottom}
                    value={value}
                    showLabels
                >
                    <BottomNavigationAction component={Link} value='/' to='/' label={theme.props.menu.Main} icon={<HomeIcon />} />
                    <BottomNavigationAction component={Link} value='/users' to='/users' label={theme.props.menu.Users} icon={<PeopleIcon />} />
                    <BottomNavigationAction component={Link} value='/rooms' to='/rooms' label={theme.props.menu.Rooms} icon={<PeopleIcon />} />
                    <BottomNavigationAction component={Link} value='/comments' to='/comments' label={theme.props.menu.Comments} icon={<PeopleIcon />} />
                    <BottomNavigationAction component={Link} value='/profile' to='/profile' label={user ? theme.props.menu.Profile : theme.props.menu.SignIn} icon={<AccountCircleIcon />} />
                </BottomNavigation>
            }
        </React.Fragment>
    );
};
export default Layout;
