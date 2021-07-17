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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import StudentDetail from './Admin/StudentDetail';



export default function UserManager(props) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const { user } = MockupData;

    const [students, setStudents] = React.useState(user);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [currentStudent, setCurrentStudent] = React.useState(students[0]);
    const [openView, setOpenView] = React.useState(false);


    const handleClickViewStudent = (student) => {
        setCurrentStudent(student);
        setOpenView(true);
    }


    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    const handleCloseView = () => {
        setOpenView(false);
    }

    const renderStudentStatus = (status) => {
        if (status) {
            return (
                <Chip className="green-chip" label="Đang hoạt động" />
            )
        }
        return (
            <Chip label="Đã bị khoá" color="secondary" />
        );
    }


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
                                {students.map((student, index) => (
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
                                            {renderStudentStatus(student.status)}
                                        </TableCell>
                                        <TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleClickViewStudent(student)}>
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
            <Dialog
                open={openView}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                fullScreen={fullScreen}
                maxWidth
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Thông tin
                </DialogTitle>
                <DialogContent>
                    <StudentDetail student={currentStudent} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseView} color="primary">
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
