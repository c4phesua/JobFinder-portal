import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Card,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip
} from '@material-ui/core';
import MockupData from '../../helper/MockupData';
import {newTab} from "../../utils/Routes";
import React from "react";

const handleJobClick = (job) => {
    newTab(`/jobs/${job.id_job}`);
}

const handleCvClick = (link) => {
    newTab(link);
}

const Applicants = (props) => (
    <Card {...props}>
        <PerfectScrollbar>
            <Box>
                <TableContainer style={{maxHeight: 450, minHeight: 450}}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Người đăng ký
                                </TableCell>
                                <TableCell>
                                    Link bài đăng tuyển
                                </TableCell>
                                <TableCell>
                                    Link CV
                                </TableCell>
                                <TableCell sortDirection="desc">
                                    <Tooltip
                                        enterDelay={300}
                                        title="Sort"
                                    >
                                        <TableSortLabel
                                            active
                                            direction="desc"
                                        >
                                            Ngày đăng ký
                                        </TableSortLabel>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {MockupData.data_manage_hr_page.CV_LIST.map((applicants) => (
                                <TableRow
                                    hover
                                >
                                    <TableCell>
                                        {applicants.employee_name}
                                    </TableCell>
                                    <TableCell>
                                        {applicants.job_name}
                                    </TableCell>
                                    <TableCell>
                                        CV
                                    </TableCell>
                                    <TableCell>
                                        {applicants.apply_at}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            color="primary"
                                            label={applicants.status}
                                            size="small"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </PerfectScrollbar>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
            }}
        >
        </Box>
    </Card>
);

export default Applicants;
