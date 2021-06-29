import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MockupData from '../../helper/MockupData';
import {newTab} from "../../utils/Routes";

const handleJobClick = (job) => {
    newTab(`/jobs/${job.id_job}`);
}

const handleCvClick = (link) => {
    newTab(link);
}

const Applicants = (props) => (
    <Card {...props}>
        <CardHeader title="Hồ sơ đăng ký"/>
        <Divider/>
        <PerfectScrollbar>
            <Box sx={{minWidth: 800}}>
                <Table>
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
            </Box>
        </PerfectScrollbar>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
            }}
        >
            <Button
                color="primary"
                endIcon={<ArrowRightIcon/>}
                size="small"
                variant="text"
            >
                View all
            </Button>
        </Box>
    </Card>
);

export default Applicants;
