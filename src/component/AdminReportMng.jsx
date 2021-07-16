import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
  TextField,
} from '@material-ui/core';
import MockupData from '../helper/MockupData';
import { newTab } from "../utils/Routes";
import React from "react";
import { Visibility } from '@material-ui/icons';
import JobDescription from './Admin/JobDesc';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


export default function AdminReportMng(props) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleLinkClick = (event) => {
    newTab(event.target.name);
  }

  const { report_data } = MockupData;
  const [openReport, setOpenReport] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [report, setReport] = React.useState(null);

  const handleOpenReport = (report) => {
    setReport(report);
    setOpenReport(true);
  };

  const handleCloseReport = () => {
    setOpenReport(false);
  };

  const handleDeleteJob = () => {
    setOpenDelete(true);
  };

  const handleDeleted = () => {
    setOpenDelete(false);
    setOpenReport(false);
  }

  const cancelDelete = () => {
    setOpenDelete(false);
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
                    STT
                  </TableCell>
                  <TableCell>
                    Tài khoản
                  </TableCell>
                  <TableCell>
                    Nội dung báo cáo
                  </TableCell>
                  <TableCell>
                    Chi tiết
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
                {report_data.map((report, index) => (
                  <TableRow
                    hover
                  >
                    <TableCell>
                      {index}
                    </TableCell>
                    <TableCell>
                      <Link component="button" onClick={handleLinkClick} name={'/profile/1'}>
                        {report.username}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {report.description}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleOpenReport(report)}>
                        <Visibility />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      {report.date}
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
      <Dialog open={openReport} fullScreen={fullScreen} maxWidth aria-labelledby="form-dialog-title">
      <DialogActions>
          <Button onClick={handleDeleteJob} color="primary">
            Huỷ bài đăng
          </Button>
          <Button onClick={handleCloseReport} color="primary">
            Hủy
          </Button>
        </DialogActions>
        <DialogContent>
          <JobDescription report={report} />
        </DialogContent>
      </Dialog>
      <Dialog fullWidth aria-labelledby="customized-dialog-title" open={openDelete}>
        <DialogTitle id="customized-dialog-title">
          Thông báo
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Bạn có chắc muốn huỷ bài đăng này?
          </Typography>
          <TextField
              variant="outlined"
              margin="normal"
              id="companyName"
              name="companyName"
              label="Lý do"
              fullWidth
              value={report.reason}
              required
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleted} autoFocus color="primary">
            OK
          </Button>
          <Button onClick={cancelDelete} autoFocus color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
