import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
    Chip,
} from '@material-ui/core';
import MockupData from '../../helper/MockupData';
import { Visibility } from '@material-ui/icons';
import React from 'react';
import { IOSSwitch } from "../IosSwitch";
import TextField from "@material-ui/core/TextField";
import ViewJob from './JobDesc2';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


export default function AdminManageJobs() {
    const theme = useTheme();
    const jobs = MockupData.data_home_page.JOB_LIST;
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [jobEdit, setJobEdit] = React.useState([jobs[0]]);
    const [fullJobs, setFullJobs] = React.useState(jobs);

    const handleClickOpenEdit = (job) => {
        setOpenEdit(true);
        setJobEdit(job);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleClickOpenDelete = (job) => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
        setOpenEdit(false);
    };

    const handleRemoveJob = (job) => {
        job.status = !job.status;
        const index = fullJobs.findIndex(j => j.id_job === job.id_job);
        fullJobs[index] = job;
        setFullJobs(fullJobs);
        setOpenDelete(false);
        setOpenEdit(false);
    }


    const renderStatus = (status) => {
        if (status) {
            return (
                <Chip className="green-chip" label="Đang hoạt động" />
            )
        }
        return (
            <Chip label="Đã gỡ" color="secondary" />
        );
    }

    return (
        <>
            <Card>
                <PerfectScrollbar>
                    <Box>
                        <TableContainer style={{ maxHeight: 450, minHeight: 450 }}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            STT
                                        </TableCell>
                                        <TableCell>
                                            Tiêu đề
                                        </TableCell>
                                        <TableCell>
                                            Tên công ty
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
                                            Trạng thái
                                        </TableCell>
                                        <TableCell>
                                            Chi tiết
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {fullJobs.map((job, index) => (
                                        <TableRow
                                            hover
                                            key={job.title}
                                        >
                                            <TableCell>
                                                {index}
                                            </TableCell>
                                            <TableCell>
                                                {job.title}
                                            </TableCell>
                                            <TableCell>
                                                {job.company_name}
                                            </TableCell>
                                            <TableCell>
                                                {job.date_create}
                                            </TableCell>
                                            <TableCell>
                                                {renderStatus(job.status)}
                                            </TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleClickOpenEdit(job)}>
                                                    <Visibility />
                                                </IconButton>
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
                <Dialog open={openEdit} fullScreen={fullScreen} maxWidth aria-labelledby="form-dialog-title">
                    <DialogActions>
                        <Button onClick={handleCloseEdit} color="primary">
                            Hủy
                        </Button>
                        <Button onClick={handleClickOpenDelete} color="primary">
                            {jobEdit.status ? 'Gỡ bài viết' : 'Đăng lại'}
                        </Button>
                    </DialogActions>
                    <DialogContent>
                        <ViewJob job={jobEdit} />
                    </DialogContent>
                </Dialog>
                <Dialog
                    open={openDelete}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {jobEdit.status ? 'Bạn có muốn gỡ bài đăng tuyển dụng này?' : 'Bạn có muốn đăng lại bài viết này?'}
                    </DialogTitle>
                    {jobEdit.status &&
                            <DialogContent>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    label="Lý do gỡ"
                                    fullWidth
                                    multiline
                                    rows={4}
                                />
                            </DialogContent>
                    }
                    <DialogActions>
                        <Button onClick={handleCloseDelete} color="primary">
                            Hủy
                        </Button>
                        <Button onClick={() => handleRemoveJob(jobEdit)} color="primary">
                            {jobEdit.status ? 'Gỡ' : 'Đăng lại'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>
        </>
    );
}
