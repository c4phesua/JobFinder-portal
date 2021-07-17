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
import MockupData from '../helper/MockupData';
import React from "react";
import { ColorButtonUnban, ColorButton } from '../utils/UtilsFunc';
import { Visibility } from '@material-ui/icons';



export default function UserManager(props) {
   

    const handleClickViewStudent = (student) => {

    }

    const [openDelete, setOpenDelete] = React.useState(false);

    const handleCloseDelete = () => {
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
                                        ID
                                    </TableCell>
                                    <TableCell>
                                        Tài khoản
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
                                        Chi tiết
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {MockupData.user.map((student, index) => (
                                    <TableRow
                                        hover
                                    >
                                        <TableCell>
                                            {index}
                                        </TableCell>
                                        <TableCell>
                                            {student.employee_name}
                                        </TableCell>
                                        <TableCell>
                                            {student.apply_date}
                                        </TableCell>
                                        <TableCell>
                                            {student.status}
                                        </TableCell>
                                        <TableCell>
                                        <TableCell>
                                                <IconButton onClick={() => handleClickViewStudent()}>
                                                    <Visibility />
                                                </IconButton>
                                            </TableCell>
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
