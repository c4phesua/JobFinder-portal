import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from "../component/Title";
import {Select} from "@material-ui/core";

// Generate Order Data
function createData(id, position, companyName, location, jobType, salary, status) {
    return { id, position, companyName, location, jobType, salary, status };
}

const rows = [
    createData(0, 'Java Backend', 'KMS', 'district 1, HCM', 'Full-time', '100$', 'PUBLIC'),
    createData(0, 'Java Backend', 'KMS', 'district 1, HCM', 'Full-time', '100$', 'PUBLIC'),
    createData(0, 'Java Backend', 'KMS', 'district 1, HCM', 'Full-time', '100$', 'PUBLIC'),
    createData(0, 'Java Backend', 'KMS', 'district 1, HCM', 'Full-time', '100$', 'PUBLIC'),
    createData(0, 'Java Backend', 'KMS', 'district 1, HCM', 'Full-time', '100$', 'PUBLIC'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function JobsGen() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Job Management</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>position</TableCell>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.position}</TableCell>
                            <TableCell>{row.companyName}</TableCell>
                            <TableCell>{row.location}</TableCell>
                            <TableCell>{row.jobType}</TableCell>
                            <TableCell>{row.salary}</TableCell>
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
                                    <option value={'PENDING'}>Public</option>
                                    <option value={'HIDDEN'}>Hidden</option>
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