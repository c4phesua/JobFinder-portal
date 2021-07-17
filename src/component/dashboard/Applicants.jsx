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
    IconButton,
    Link,
    MenuItem,
    Select,
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
import { newTab } from "../../utils/Routes";
import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";


export default function Applicants(props) {
    const statusName = ["Chờ duyệt", "Chấp thuận", "Từ chối"]

    const statusColor = ['#636e74', '#00ff00', '#ff0000']

    const [statusTmp, setStatusTmp] = React.useState(1);

    const [status, setStatus] = React.useState(1);

    const handleStatusTmpOnchange = (event) => {
        setStatusTmp(event.target.value)
        console.log(event.target.value)
    }

    const handleLinkClick = (event) => {
        newTab(event.target.name);
    }

    const [openDelete, setOpenDelete] = React.useState(false);
    const handleClickOpenDelete = (job) => {
        setOpenDelete(true);
    };

    const handleCloseDelete = (event) => {
        console.log(event)
        if (event === 1){
            setStatus(statusTmp)
        }
        setStatusTmp(1);
        setOpenDelete(false);
    };
    return (
        <Card {...props}>
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
                                        Người đăng ký
                                    </TableCell>
                                    <TableCell>
                                        Link bài đăng tuyển
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
                                        Trạng thái
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {MockupData.data_manage_hr_page.CV_LIST.map((applicants, index) => (
                                    <TableRow
                                        hover
                                    >
                                        <TableCell>
                                            {index}
                                        </TableCell>
                                        <TableCell>
                                            <Link component="button" onClick={handleLinkClick} name={'/profile/' + applicants.employee_id}>
                                                {applicants.employee_name}
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Link component="button" onClick={handleLinkClick} name={applicants.job_link}>
                                                {applicants.job_name}
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            {applicants.apply_date}
                                        </TableCell>
                                        <TableCell>
                                            <Chip
                                                size="small"
                                                label={statusName[status - 1]}
                                                clickable
                                                style={{backgroundColor: statusColor[status - 1], color: 'white'}}
                                                onClick={handleClickOpenDelete}
                                            />
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
            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Thay đổi trạng thái bài ứng tuyển
                </DialogTitle>
                <DialogContent >
                    <Select
                        fullWidth={true}
                        onChange={handleStatusTmpOnchange}
                        value={statusTmp}
                    >
                        <MenuItem value={1}>Chờ Duyệt</MenuItem>
                        <MenuItem value={2}>Chấp Thuận</MenuItem>
                        <MenuItem value={3}>Từ Chối</MenuItem>
                    </Select>
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
    );
}