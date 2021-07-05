import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Divider, IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel, TextField,
    Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MockupData from '../../helper/MockupData';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import EditJob from "../EditComponent";
import {func} from "prop-types";

export default function Applicants()
{
    const [open, setOpen] = React.useState(false);
    const [jobEdit, setJobEdit] = React.useState();

    const handleClickOpen = (job) => {
        setOpen(true);
        setJobEdit(job);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card>
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
                                <TableCell>
                                    sửa
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {MockupData.data_manage_hr_page.JOB_LIST.map((job) => (
                                <TableRow
                                    hover
                                    key={job.title}
                                >
                                    <TableCell>
                                        {job.title}
                                    </TableCell>
                                    <TableCell>
                                        {Math.round(Math.random() * 100 % 255)}
                                    </TableCell>
                                    <TableCell>
                                        {job.date_create}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            color="primary"
                                            label={job.status}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleClickOpen(job)}>
                                            <EditIcon/>
                                        </IconButton>
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
            </Box>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <EditJob job={jobEdit}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Lưu
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}
