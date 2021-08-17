import React from 'react';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    cardheader: {
        background: '#e7ecef'
    }
}));

const CompanyInfo = () => {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader className={classes.cardheader} title="Company Info" />
        </Card>
    );
};

export default CompanyInfo;
