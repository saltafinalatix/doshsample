import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import { Grid } from '@material-ui/core';
import Filter from './Filter';
import Content from './Content';

const App = () => {
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

export default App;
