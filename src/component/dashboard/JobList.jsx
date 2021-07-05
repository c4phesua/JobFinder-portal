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
import MockupData from '../../helper/MockupData';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import EditJob from "../EditComponent";
import {IOSSwitch} from "../IosSwitch";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {newTab} from "../../utils/Routes";


export default function Applicants() {
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [jobEdit, setJobEdit] = React.useState();
    const jobs = MockupData.data_manage_hr_page.JOB_LIST;
    var initState = {}
    for (const job of jobs) {
        initState[job.id_job.toString()] = true
    }

    const onClickOpenCreate = () => {
        newTab('/hr/create')
    }

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
                                                <IconButton onClick={() => handleClickOpenEdit(job)}>
                                                    <EditIcon/>
                                                </IconButton>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton onClick={handleClickOpenDelete}>
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
                <Dialog open={openEdit} onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <EditJob job={jobEdit}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseEdit} color="primary">
                            Hủy
                        </Button>
                        <Button onClick={handleCloseEdit} color="primary">
                            Lưu
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={openDelete}
                    onClose={handleCloseDelete}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        Bạn có muốn xóa bài đăng tuyển dụng này?
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Nội dụng đã xóa sẽ không thể khôi phục lại.
                            Chọn "Xóa" để tiếp tục, "Hủy" để dừng yêu cầu.
                        </DialogContentText>
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
