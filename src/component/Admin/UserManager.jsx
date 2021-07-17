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
    TextField,
    Tooltip
} from '@material-ui/core';
import MockupData from '../../helper/MockupData';
import React from "react";
import { Visibility } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import StudentDetail from './StudentDetail';



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

    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    }

    const handleBanStudent = (student) => {
        student.status = !student.status;
        const index = students.findIndex(s => s.id === student.id);
        students[index] = student;
        setStudents(students);
        setOpenView(false);
        setOpenDelete(false);
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
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {currentStudent.status ? 'Bạn có muốn khóa tài khoản này?' : 'Bạn có muốn mở khoá tài khoản này?'}
                </DialogTitle>
                {currentStudent.status &&
                    <DialogContent>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            label="Lý do khoá"
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
                    <Button onClick={() => handleBanStudent(currentStudent)} color="primary">
                        {currentStudent.status ? 'Khoá' : 'Mở khoá'}
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
                    <Button onClick={handleClickOpenDelete} color="primary">
                        {currentStudent.status ? 'Khoá' : 'Mở khoá'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}
