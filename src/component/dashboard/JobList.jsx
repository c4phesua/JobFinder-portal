import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip
} from '@material-ui/core';
import MockupData from '../../helper/MockupData';
import EditIcon from '@material-ui/icons/Edit';
import React, {useEffect} from 'react';
import EditJob from "../EditComponent";
import {IOSSwitch} from "../IosSwitch";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {newTab} from "../../utils/Routes";


export default function Applicants() {
    const [open, setOpen] = React.useState(false);
    const [jobEdit, setJobEdit] = React.useState();
    const jobs = MockupData.data_manage_hr_page.JOB_LIST;
    var initState = {}
    for (const job of jobs) {
        initState[job.id_job.toString()] = true
    }

    const onClickOpenCreate = () => {
        newTab('http://localhost:3000/hr/create')
    }

    const handleClickOpen = (job) => {
        setOpen(true);
        setJobEdit(job);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [switchState, setSwitchState] = React.useState(initState);

    console.log(switchState)

    const handleChange = (event) => {
        console.log(event.target.name)
        setSwitchState({...switchState, [event.target.name]: event.target.checked});
    };
    return (
        <>
            <Card>
                <PerfectScrollbar>
                    <Box>
                        <TableContainer style={{maxHeight: 450, minHeight: 450}}>
                            <Table stickyHeader>
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
                                            Trạng thái
                                        </TableCell>
                                        <TableCell>
                                            Sửa
                                        </TableCell>
                                        <TableCell>
                                            Xóa
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {jobs.map((job) => (
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
                                                {/*<Chip*/}
                                                {/*    color="primary"*/}
                                                {/*    label={job.status}*/}
                                                {/*    size="small"*/}
                                                {/*/>*/}
                                                <IOSSwitch checked={switchState[job.id_job.toString()]}
                                                           onChange={handleChange} name={job.id_job.toString()}/>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleClickOpen(job)}>
                                                    <EditIcon/>
                                                </IconButton>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton>
                                                    <DeleteForeverIcon style={{color: 'red'}}/>
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
            <div className="add-hr-btn">
                <Button
                    color="primary"
                    variant="contained"
                    onClick={onClickOpenCreate}
                >
                    Tạo bài tuyển dụng
                </Button>
            </div>
        </>
    );
}
