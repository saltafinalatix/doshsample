import React, { useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CompanyInfoForm from './CompanyInfoForm';

const useStyles = makeStyles(() => ({
    companyinfocard: {
        display: 'flex',
        marginTop: 20,
        marginLeft: 20
    },
    paper: {
        padding: 20,
        width: 500
    },
    paperheader: {
        background: '#edf2fb',
        padding: 10
    }

    // companyinfo: {
    //     padding: 20,
    //     marginRight: 23
    // },

    // cardheader: {
    //     background: '#edf2fb'
    // },
}));

const CompanyInfo = () => {
    const classes = useStyles();
    return (
        <div className={classes.companyinfocard}>
            {/* <Card className={classes.companyinfo}>
                <CardHeader
                    className={classes.cardheader}
                    title="Company Info"
                />
            </Card> */}
            <Paper className={classes.paper}>
                <Typography className={classes.paperheader} variant="h4">
                    Company Info
                </Typography>
                <CompanyInfoForm />
            </Paper>
        </div>
    );
};

export default CompanyInfo;
