import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card, Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton, MenuItem, Select,
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
import { IOSSwitch } from "../IosSwitch";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { newTab } from "../../utils/Routes";


export default function Applicants() {
    const statusName = ["Đang hoạt động", "Đã gỡ"]

    const statusColor = ['#00ff00', '#ff0000']


    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [jobEdit, setJobEdit] = React.useState();
    const [idTmp, setIdTmp] = React.useState();
    const jobs = MockupData.data_manage_hr_page.JOB_LIST;
    var initState = {}
    for (const job of jobs) {
        initState[job.id_job] = 0
    }

    const [switchState, setSwitchState] = React.useState(initState);

    console.log(switchState)

    const onClickOpenCreate = () => {
        newTab('/hr/create')
    }

    const handleClickOpenEdit = (job, index) => {
        setOpenEdit(true);
        setJobEdit(job);
        setIdTmp(index);
        console.log(switchState[idTmp])
    };

    const handleCloseEdit = (value) => {
        console.log("edit status debug: " + value)
        setOpenEdit(false);
        setSwitchState({ ...switchState, [idTmp]: value });
    };

    const handleCloseDelete = (event) => {
        setOpenDelete(false);
    };

    const handleClickOpenDelete = (index) => {
        setIdTmp(index)
        setOpenDelete(true);
    };

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
                                            ID
                                        </TableCell>
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
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {jobs.map((job, index) => (
                                        <TableRow
                                            hover
                                            key={job.title}
                                        >
                                            <TableCell>
                                                {job.id_job}
                                            </TableCell>
                                            <TableCell>
                                                {job.title}
                                            </TableCell>
                                            <TableCell>
                                                {job.num}
                                            </TableCell>
                                            <TableCell>
                                                {job.date_create}
                                            </TableCell>
                                            <TableCell>
                                                <Chip
                                                    size="small"
                                                    label={statusName[switchState[job.id_job]]}
                                                    style={{backgroundColor: statusColor[switchState[job.id_job]], color: 'white'}}
                                                />
                                                {/*<IOSSwitch checked={switchState[job.id_job.toString()]}*/}
                                                {/*    onChange={handleChange} name={job.id_job.toString()} />*/}
                                            </TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleClickOpenEdit(job, job.id_job)}>
                                                    <EditIcon />
                                                </IconButton>
                                            </TableCell>
                                            {/*<TableCell>*/}
                                            {/*    <IconButton onClick={handleClickOpenDelete}>*/}
                                            {/*        <DeleteForeverIcon style={{ color: 'red' }} />*/}
                                            {/*    </IconButton>*/}
                                            {/*</TableCell>*/}
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
                <Dialog open={openEdit} onClose={() => handleCloseEdit(switchState[idTmp])} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <EditJob job={jobEdit} status={false} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleCloseEdit(switchState[idTmp])} color="primary">
                            Hủy
                        </Button>
                        <Button onClick={() => handleCloseEdit(switchState[idTmp])} color="primary">
                            Lưu
                        </Button>
                        <Button onClick={() => handleCloseEdit(1)} hidden={switchState[idTmp] === 1} color="primary">
                            Gỡ bài đăng
                        </Button>
                        <Button onClick={() => handleCloseEdit(0)} hidden={switchState[idTmp] === 0} color="primary">
                            Đăng bài
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
                        Thay đổi trạng thái bài tuyển dụng
                    </DialogTitle>
                    <DialogContent>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleCloseDelete(0)} color="primary">
                            Hủy
                        </Button>
                        <Button onClick={() => handleCloseDelete(1)} color="primary">
                            Đồng ý
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
