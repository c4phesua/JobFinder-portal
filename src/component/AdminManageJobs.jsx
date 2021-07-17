import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip
} from '@material-ui/core';
import MockupData from '../helper/MockupData';
import { Visibility } from '@material-ui/icons';
import React from 'react';
import { IOSSwitch } from "./IosSwitch";
import TextField from "@material-ui/core/TextField";
import ViewJob from './Admin/JobDesc2';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


export default function AdminManageJobs() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [jobEdit, setJobEdit] = React.useState();
    const jobs = MockupData.data_home_page.JOB_LIST;
    var initState = {}

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
    const [switchState, setSwitchState] = React.useState(initState);

    console.log(switchState)

    const handleChange = (event) => {
        console.log(event.target.name)
        setSwitchState({ ...switchState, [event.target.name]: event.target.checked });
    };
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
                                    {jobs.map((job, index) => (
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
                                                {job.status ? 'Hoạt động' : 'Không hoạt động'}
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
                <Dialog open={openEdit} fullScreen={fullScreen} maxWidth onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
                    <DialogActions>
                        <Button onClick={handleClickOpenDelete} color="primary">
                            Gỡ bài viết
                        </Button>
                        <Button onClick={handleCloseEdit} color="primary">
                            Hủy
                        </Button>
                    </DialogActions>
                    <DialogContent>
                        <ViewJob job={jobEdit} />
                    </DialogContent>
                </Dialog>
                <Dialog
                    open={openDelete}
                    onClose={handleCloseDelete}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        Bạn có muốn gỡ bài đăng tuyển dụng này?
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            label="Lý do xóa"
                            fullWidth
                            multiline
                            rows={4}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDelete} color="primary">
                            Hủy
                        </Button>
                        <Button onClick={handleCloseDelete} color="primary">
                            Xóa
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>
        </>
    );
}
