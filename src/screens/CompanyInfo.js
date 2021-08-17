import React, { useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CompanyInfoForm from './CompanyInfoForm';
import WalletDetailsForm from './WalletDetailsForm';

const useStyles = makeStyles(() => ({
    companyinfocard: {
        display: 'flex',
        marginRight: 10,
        marginTop: 20,
        marginLeft: 20
    },
    paper: {
        marginLeft: 25,
        padding: 20,
        width: 600
    },
    paperheader: {
        background: '#edf2fb',
        padding: 10,
        textTransform: 'uppercase'
    }
}));

const CompanyInfo = () => {
    const classes = useStyles();
    return (
        <div className={classes.companyinfocard}>
            <Paper className={classes.paper}>
                <Typography className={classes.paperheader} variant="h4">
                    Company Info
                </Typography>
                <CompanyInfoForm />
            </Paper>
            <Paper className={classes.paper}>
                <Typography className={classes.paperheader} variant="h4">
                    Wallet Details
                </Typography>
                <WalletDetailsForm />
            </Paper>
        </div>
    );
};

export default CompanyInfo;
