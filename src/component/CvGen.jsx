import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from "./Title";
import {Select} from "@material-ui/core";

// Generate Order Data
function createData(id, date, name, email, cv, status) {
    return { id, date, name, email, cv, status };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'test@test.com', 'facebook.com', 'PENDING'),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'test@test.com', 'facebook.com', 'PENDING'),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'test@test.com', 'facebook.com', 'PENDING'),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'test@test.com', 'facebook.com', 'PENDING'),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'test@test.com', 'facebook.com', 'PENDING'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Cvs() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>CV Management</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>CV</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell><Link>{row.cv}</Link></TableCell>
                            <TableCell>
                                <Select
                                    native
                                    defaultValue={row.status}
                                    label="Age"
                                    inputProps={{
                                        name: 'Status',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option value={'PENDING'}>PENDING</option>
                                    <option value={'REJECT'}>REJECT</option>
                                    <option value={'APPROVE'}>APPROVE</option>
                                </Select>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more orders
                </Link>
            </div>
        </React.Fragment>
    );
}