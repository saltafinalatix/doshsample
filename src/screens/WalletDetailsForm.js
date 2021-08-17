import React, { useState } from 'react';
import { Typography, Grid, TextField, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const initialValues = {
    walletNumber: '',
    customerCategory: '',
    customerOperation: ''
};

const useStyles = makeStyles(() => ({
    companyinfo: {
        padding: 20,
        marginRight: 23,
        minHeight: 500
    },
    companyInfotitle: {
        marginRight: 100
    },

    cardheader: {
        background: '#edf2fb'
    },
    companyInfocontainer: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-around'
    },
    companyinfoInput: {
        marginLeft: 100
    },
    divider: {
        padding: 10
    }
}));

const WalletDetailsForm = () => {
    const classes = useStyles();
    const [values, setValues] = useState(initialValues);
    return (
        <>
            <Grid container className={classes.companyInfocontainer}>
                <Grid item>
                    <Typography className={classes.companyInfotitle}>
                        Wallet Number
                    </Typography>
                </Grid>

                <Grid item>
                    <TextField
                        className={classes.companyinfoInput}
                        variant="outlined"
                        value={values.walletNumber}
                        required
                    />
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid container className={classes.companyInfocontainer}>
                <Grid item>
                    <Typography>Customer Category</Typography>
                </Grid>
                <Grid item>
                    <TextField
                        className={classes.companyinfoInput}
                        variant="outlined"
                        value={values.customerCategory}
                        required
                    />
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid container className={classes.companyInfocontainer}>
                <Grid item>
                    <Typography>Customer Operational Type</Typography>
                </Grid>
                <Grid item>
                    <TextField
                        className={classes.companyinfoInput}
                        variant="outlined"
                        value={values.customerOperation}
                        required
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default WalletDetailsForm;
