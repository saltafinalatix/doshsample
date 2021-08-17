import React, { useState } from 'react';
import { Typography, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const initialValues = {
    businessName: '',
    tradingName: '',
    merchantPlan: '',
    businessType: '',
    businessRegistrationNumber: '',
    applyGst: '',
    gstNumber: ''
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
        display: 'flex'
    },
    companyinfoInput: {
        marginLeft: 100
    }
}));

const CompanyInfoForm = () => {
    const classes = useStyles();
    const [values, setValues] = useState(initialValues);
    return (
        <Grid container className={classes.companyInfocontainer}>
            <Grid item>
                <Typography className={classes.companyInfotitle}>
                    Business Name
                </Typography>
            </Grid>
            <Grid item>
                <TextField
                    className={classes.companyinfoInput}
                    variant="outlined"
                    value={values.businessName}
                    required
                />
            </Grid>
            <Grid container className={classes.companyInfocontainer}>
                <Grid item>
                    <Typography>Trading Name</Typography>
                </Grid>
                <Grid item>
                    <TextField
                        className={classes.companyinfoInput}
                        variant="outlined"
                        value={values.tradingName}
                        required
                    />
                </Grid>
                <Grid container className={classes.companyInfocontainer}>
                    <Grid item>
                        <Typography>Merchant Plan</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.companyinfoInput}
                            variant="outlined"
                            value={values.merchantPlan}
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container className={classes.companyInfocontainer}>
                    <Grid item>
                        <Typography>Business Type</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.companyinfoInput}
                            variant="outlined"
                            value={values.businessType}
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container className={classes.companyInfocontainer}>
                    <Grid item>
                        <Typography>Business Registration Number</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.companyinfoInput}
                            variant="outlined"
                            value={values.businessRegistrationNumber}
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container className={classes.companyInfocontainer}>
                    <Grid item>
                        <Typography>Apply GST?</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.companyinfoInput}
                            variant="outlined"
                            value={values.businessRegistrationNumber}
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container className={classes.companyInfocontainer}>
                    <Grid item>
                        <Typography>GST Number</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.companyinfoInput}
                            variant="outlined"
                            value={values.gstNumber}
                            required
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CompanyInfoForm;
