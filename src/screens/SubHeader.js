import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    button: {
        marginLeft: '800px'
    },
    link: {
        textDecoration: 'none'
    },
    divider: {
        width: '1380px'
    },
    maincontainer: {
        backgroundColor: '#edf2fb'
    },
    btn: {
        color: '#6c757d',
        textTransform: 'capitalize'
    }
}));
const SubHeader = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.maincontainer}>
                <Button className={classes.btn} endIcon={<CloseOutlinedIcon />}>
                    Dashboard
                </Button>
                <Button className={classes.btn} endIcon={<CloseOutlinedIcon />}>
                    Customers
                </Button>
            </Grid>
            <Divider className={classes.divider} />

            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                mt={2}
                mb={2}
            >
                <Grid item ml={2}>
                    <Typography variant="h5">Customer Management</Typography>
                </Grid>
                <Grid item mr={2}>
                    <Link className={classes.link} to="/createcustomer">
                        <Button
                            style={{
                                textTransform: 'capitalize'
                            }}
                            variant="contained"
                            color="primary"
                            disableElevation
                        >
                            Create Customer
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Divider variant="fullWidth" />
        </>
    );
};

export default SubHeader;
