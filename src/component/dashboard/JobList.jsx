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

const Applicants = (props) => (
    <Card {...props}>
        <CardHeader title="Bài đăng tuyển"/>
        <Divider/>
        <PerfectScrollbar>
            <Box sx={{minWidth: 800}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Tiêu đề
                            </TableCell>
                            <TableCell>
                                Số ứng tuyển
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
                                        Ngày đăng
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell>
                                Trang thái
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {MockupData.data_manage_hr_page.JOB_LIST.map((jobs) => (
                            <TableRow
                                hover
                                key={jobs.title}
                            >
                                <TableCell>
                                    {jobs.title}
                                </TableCell>
                                <TableCell>
                                    {Math.round(Math.random()*100 % 255)}
                                </TableCell>
                                <TableCell>
                                    {jobs.date_create}
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        color="primary"
                                        label={jobs.status}
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
