import React from 'react';
import { Grid, Typography, Button, ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Header from '../screens/Header';
import { makeStyles } from '@material-ui/styles';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Divider from '@material-ui/core/Divider';
import CompanyInfo from '../screens/CompanyInfo';

const useStyles = makeStyles(() => ({
    divider: {
        width: '1380px'
    },
    maincontainer: {
        backgroundColor: '#edf2fb'
    },
    btn: {
        color: '#6c757d',
        textTransform: 'capitalize'
    },
    link: {
        textDecoration: 'none'
    },
    btnwrap: {
        display: 'flex'
    }
}));

const CreateCustomer = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Header />
                <Grid container className={classes.maincontainer}>
                    <Button
                        className={classes.btn}
                        endIcon={<CloseOutlinedIcon />}
                    >
                        Dashboard
                    </Button>
                    <Button
                        className={classes.btn}
                        endIcon={<CloseOutlinedIcon />}
                    >
                        Customers
                    </Button>
                    <Button
                        className={classes.btn}
                        endIcon={<CloseOutlinedIcon />}
                    >
                        Create Customer
                    </Button>
                </Grid>
                <Divider className={classes.divider} />

                <Grid
                    container
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={3}
                    mb={3}
                    mr={2}
                    ml={2}
                >
                    <Typography variant="h5">
                        Create corporate customer
                    </Typography>

                    <ButtonGroup>
                        <Link to="/" className={classes.link}>
                            <Button
                                style={{ textTransform: 'capitalize' }}
                                variant="contained"
                                color="primary"
                            >
                                Create and Close
                            </Button>
                        </Link>

                        <Button
                            style={{
                                textTransform: 'capitalize',
                                background: '#e5e5e5',
                                color: '#000'
                            }}
                            variant="contained"
                        >
                            Create
                        </Button>

                        <Button
                            style={{
                                textTransform: 'capitalize',
                                background: '#e5e5e5',
                                color: '#000'
                            }}
                            variant="contained"
                        >
                            Close
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Divider className={classes.divider} />
                <Grid container display="flex" alignItems="center">
                    <Grid item ml={2}>
                        <Button style={{ color: '#6c757d' }}>
                            Company Information
                        </Button>
                    </Grid>
                    <Grid item ml={2}>
                        <Button style={{ color: '#6c757d' }}>
                            Contact Info{' '}
                        </Button>
                    </Grid>
                    <Grid item ml={2}>
                        <Button style={{ color: '#6c757d' }}>
                            Owner Information{' '}
                        </Button>
                    </Grid>
                    <Grid item ml={2}>
                        <Button style={{ color: '#6c757d' }}>Account</Button>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <CompanyInfo mt={4} />
            </Grid>
        </>
    );
};

export default CreateCustomer;
