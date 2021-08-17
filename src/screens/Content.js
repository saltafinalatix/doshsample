import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    table: {
        minWidth: 1370
    }
}));

function createData(
    id,
    name,
    category,
    branch,
    phone,
    date,
    status,
    mcstatus,
    failreason
) {
    return {
        id,
        name,
        category,
        branch,
        phone,
        date,
        status,
        mcstatus,
        failreason
    };
}

const rows = [
    createData(
        '11474',
        'Firstname Lastname',
        'Standard Customer',
        'Dosh',
        '033100200',
        '29 - 07 - 2021',
        'Active',
        'Approved'
    ),
    createData(
        '11474',
        'Firstname Lastname',
        'Standard Customer',
        'Dosh',
        '033400800',
        '29 - 07 - 2021',
        'Active',
        'Approved'
    ),
    createData(
        '11474',
        'Firstname Lastname',
        'Standard Customer',
        'Dosh',
        '033333338',
        '30 - 07 - 2021',
        'Active',
        'Approved'
    ),
    createData(
        '11474',
        'Firstname Lastname',
        'Standard Customer',
        'Dosh',
        '033400800',
        '29 - 07 - 2021',
        'Active',
        'Approved'
    ),
    createData(
        '11474',
        'Firstname Lastname',
        'Standard Customer',
        'Dosh',
        '033400800',
        '29 - 07 - 2021',
        'Active',
        'Approved'
    ),
    createData(
        '11474',
        'Firstname Lastname',
        'Standard Customer',
        'Dosh',
        '033400800',
        '29 - 07 - 2021',
        'Active',
        'Approved'
    ),
    createData(
        '11474',
        'Firstname Lastname',
        'Standard Customer',
        'Dosh',
        '033400800',
        '29 - 07 - 2021',
        'Active',
        'Approved'
    ),
    createData(
        '11474',
        'Firstname Lastname',
        'Standard Customer',
        'Dosh',
        '033400800',
        '29 - 07 - 2021',
        'Active',
        'Approved'
    )
];
const Content = () => {
    const classes = useStyles();
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Customer Name</TableCell>
                            <TableCell align="right">
                                Customer Category
                            </TableCell>
                            <TableCell align="right">Branch</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Date Created</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">M/C Status</TableCell>
                            <TableCell align="right">Fail Reason</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.category}
                                </TableCell>
                                <TableCell align="right">
                                    {row.branch}
                                </TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">
                                    {row.status}
                                </TableCell>
                                <TableCell align="right">
                                    {row.mcstatus}
                                </TableCell>
                                <TableCell align="right">
                                    {row.failreason}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Content;
