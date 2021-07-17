import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
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
import CompanyDetails from './CompanyDetail';



export default function CompanyManager(props) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const { companies_data } = MockupData;

    const [companies, setCompanies] = React.useState(companies_data);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [currentCompany, setCurrentCompany] = React.useState(companies[0]);
    const [openView, setOpenView] = React.useState(false);


    const handleClickViewCompany = (company) => {
        setCurrentCompany(company);
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

    const handleBanCompany = (company) => {
        company.status = !company.status;
        const index = companies.findIndex(c => c.id === company.id);
        companies[index] = company;
        setCompanies(companies);
        setOpenView(false);
        setOpenDelete(false);
    }

    const renderCompanyStatus = (status) => {
        if (status) {
            return (
                <Chip className="green-chip" label="Đang hoạt động" />
            )
        }
        return (
            <Chip className="red-chip" label="Đã bị khoá"/>
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
                                {companies.map((company, index) => (
                                    <TableRow
                                        hover
                                    >
                                        <TableCell>
                                            {index}
                                        </TableCell>
                                        <TableCell>
                                            {company.company_name}
                                        </TableCell>
                                        <TableCell>
                                            {company.date_create}
                                        </TableCell>
                                        <TableCell>
                                            {renderCompanyStatus(company.status)}
                                        </TableCell>
                                        <TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleClickViewCompany(company)}>
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
                    {currentCompany.status ? 'Bạn có muốn khóa công ty này?' : 'Bạn có muốn mở khoá công ty này?'}
                </DialogTitle>
                {currentCompany.status &&
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
                    <Button onClick={() => handleBanCompany(currentCompany)} color="primary">
                        {currentCompany.status ? 'Khoá' : 'Mở khoá'}
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
                    <CompanyDetails company={currentCompany} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseView} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={handleClickOpenDelete} color="primary">
                        {currentCompany.status ? 'Khoá' : 'Mở khoá'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}
