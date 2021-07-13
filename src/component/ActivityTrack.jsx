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
import {newTab} from "../utils/Routes";
import React from "react";


export default function Activity(props) {
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
                                        STT
                                    </TableCell>
                                    <TableCell>
                                        Tài khoản
                                    </TableCell>
                                    <TableCell>
                                        Hoạt động
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
                                                Thời gian thực hiện
                                            </TableSortLabel>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {MockupData.user.map((applicants,index) => (
                                    <TableRow
                                        hover
                                    >
                                        <TableCell>
                                            {index}
                                        </TableCell>
                                        <TableCell>
                                            <Link component="button" onClick={handleLinkClick} name={'/profile/' + applicants.employee_id}>
                                                {/*{applicants.employee_name}*/}
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            {/*{applicants.apply_date}*/}
                                        </TableCell>
                                        <TableCell>
                                            {/*{applicants.role}*/}
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
