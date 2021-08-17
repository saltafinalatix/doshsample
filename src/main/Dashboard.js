import React from 'react';
import Header from '../screens/Header';
import SubHeader from '../screens/SubHeader';
import { Grid } from '@material-ui/core';
import Filter from '../screens/Filter';
import Content from '../screens/Content';

const Dashboard = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>
            <Grid container>
                <Grid item>
                    <SubHeader />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <Filter />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <Content />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
