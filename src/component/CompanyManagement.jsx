import React from 'react';
import {
    Box,
    Button,
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MockupData from '../helper/MockupData';
import {IOSSwitch} from "./IosSwitch";
import CreateHR from "./CreateHr";


const onCreateButtonClicked = () => {
    // open popup here
}

const CompanyManagement = (props) => {

    const employees = MockupData.employees.slice(1);
    const [openCreate, setOpenCreate] = React.useState(false);
    var initState = {}
    for (const emp of employees) {
        initState[emp.id.toString()] = true
    }
    const [switchState, setSwitchState] = React.useState(initState);
    const handleChange = (event) => {
        console.log(event.target.name)
        setSwitchState({...switchState, [event.target.name]: event.target.checked});
    };
    const handleClickOpenCreate = () => {
        setOpenCreate(true);
    };

    const handleCloseCreate = () => {
        setOpenCreate(false);
    };

    return (
        <>
            <Card {...props}>
                <PerfectScrollbar>''
                    <Box>
                        <TableContainer style={{maxHeight: 450, minHeight: 450}}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Id
                                        </TableCell>
                                        <TableCell>
                                            Họ tên
                                        </TableCell>
                                        <TableCell>
                                            Email
                                        </TableCell>
                                        <TableCell>
                                            Số điện thoại
                                        </TableCell>
                                        <TableCell>
                                            Trạng thái
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {employees.map((employee) => (
                                        <TableRow
                                            hover
                                        >
                                            <TableCell>
                                                {employee.id}
                                            </TableCell>
                                            <TableCell>
                                                {employee.fullname}
                                            </TableCell>
                                            <TableCell>
                                                {employee.email}
                                            </TableCell>
                                            <TableCell>
                                                {employee.phone}
                                            </TableCell>
                                            <TableCell>
                                                <IOSSwitch
                                                    checked={switchState[employee.id.toString()]}
                                                    onChange={handleChange} name={employee.id.toString()}
                                                />
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
            </Card>
            <div className="add-hr-btn">
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClickOpenCreate}
                >
                    Thêm nhân viên
                </Button>
            </div>
            <Dialog open={openCreate} onClose={handleCloseCreate} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <CreateHR/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCreate} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={handleCloseCreate} color="primary">
                        Tạo mới
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CompanyManagement;