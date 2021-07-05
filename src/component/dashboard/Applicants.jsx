import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    InputLabel, Link,
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
import {newTab} from "../../utils/Routes";
import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";


export default function Applicants(props) {
    const handleLinkClick = (event) => {
        newTab(event.target.name);
    }

    const [openDelete, setOpenDelete] = React.useState(false);
    const handleClickOpenDelete = (job) => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };
    return (
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
                                    <TableCell>
                                        Xóa
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {MockupData.data_manage_hr_page.CV_LIST.map((applicants) => (
                                    <TableRow
                                        hover
                                    >
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
                                            <Select
                                                value={applicants.status}
                                            >
                                                <MenuItem value={1}>Chờ Duyệt</MenuItem>
                                                <MenuItem value={2}>Chấp Thuận</MenuItem>
                                                <MenuItem value={3}>Từ Chối</MenuItem>
                                            </Select>
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
            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Bạn có muốn xóa bài ứng tuyển này?
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
    );
}
