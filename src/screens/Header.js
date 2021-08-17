import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { makeStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({
    selectStyles: {
        marginLeft: '50%'
    },
    secondSelectStyles: {
        marginLeft: '30px'
    },
    dollaricon: {
        color: 'blue'
    },
    title: {
        color: 'blue',
        fontSize: '30px',
        fontWeight: 'bold'
    },
    homeicon: {
        color: 'grey'
    }
}));
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar color="transparent" position="static">
            <Toolbar>
                <MonetizationOnIcon className={classes.dollaricon} />
                <Typography className={classes.title} mr={3}>
                    dosh
                </Typography>
                <HomeRoundedIcon className={classes.homeicon} />
                <Typography ml={2} mr={2}>
                    Customers
                </Typography>
                <Typography mr={2}>Reports</Typography>
                <Typography>Marketing Campaign</Typography>
                <Select className={classes.selectStyles}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem>USA</MenuItem>
                    <MenuItem>UK</MenuItem>
                    <MenuItem>Kyrgyzstan</MenuItem>
                </Select>
                <Select className={classes.secondSelectStyles}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem>None</MenuItem>
                    <MenuItem>None</MenuItem>
                    <MenuItem>None</MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
