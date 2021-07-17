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
  Chip,
} from '@material-ui/core';
import MockupData from '../../helper/MockupData';
import { newTab } from "../../utils/Routes";
import React from "react";
import { Visibility } from '@material-ui/icons';
import JobDescription from './JobDesc';
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
  const [openUndo, setOpenUndo] = React.useState(false);
  const [reports, setReports] = React.useState(report_data);
  const [currentReport, setCurrentReport] = React.useState(reports[0]);

  const handleOpenReport = (report) => {
    setCurrentReport(report);
    setOpenReport(true);
  };

  const handleCloseReport = () => {
    setOpenReport(false);
  };

  const handleOpenDeleteJob = () => {
    setOpenDelete(true);
  };

  const handleUndo = () => {
    setOpenUndo(true);
  }

  const handleCancelUndo = () => {
    setOpenUndo(false);
  }

  const handleDeletedJob = (report) => {
    report.status = 2;
    handleStatus(report);
  }

  const handleIgnoreReport = (report) => {
    report.status = 1;
    handleStatus(report);
  }

  const backToPending = (report) => {
    report.status = 0;
    handleStatus(report);
    setOpenUndo(false);
  }

  const handleStatus = report => {
    const index = reports.findIndex(r => r.id === report.id);
    reports[index] = report;
    setReports(reports);
    setOpenDelete(false);
  }

  const cancelDelete = () => {
    setOpenDelete(false);
  }

  const renderStatus = (status) => {
    if (status === 0) {
      return (
        <Chip className="yellow-chip" label="Chưa xử lý" />
      )
    }
    if (status === 1) {
      return (
        <Chip className="green-chip" label="Đã bỏ qua" />
      )
    }
    return (
      <Chip className="red-chip" label="Đã gỡ bài viết" />
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
                    STT
                  </TableCell>
                  <TableCell>
                    Tài khoản
                  </TableCell>
                  <TableCell>
                    Nội dung báo cáo
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
                  <TableCell>
                    Trạng thái
                  </TableCell>
                  <TableCell>
                    Chi tiết
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reports.map((report, index) => (
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
                      {report.date}
                    </TableCell>
                    <TableCell>
                      {renderStatus(report.status)}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleOpenReport(report)}>
                        <Visibility />
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
      <Dialog open={openReport} fullScreen={fullScreen} maxWidth aria-labelledby="form-dialog-title">
        <DialogActions>
          <Button onClick={handleCloseReport} color="primary">
            Hủy
          </Button>
          {currentReport.status === 0 && <>
            <Button onClick={() => handleIgnoreReport(currentReport)} color="primary">
              Bỏ qua
            </Button>
            <Button onClick={handleOpenDeleteJob} color="primary">
              Gỡ bài đăng
            </Button>
          </>}
          {
            currentReport.status !== 0 &&
            <Button onClick={handleUndo} color="primary">
              Hoàn tác
            </Button>
          }
        </DialogActions>
        <DialogContent>
          <JobDescription report={currentReport} />
        </DialogContent>
      </Dialog>
      <Dialog fullWidth aria-labelledby="customized-dialog-title" open={openDelete}>
        <DialogTitle id="customized-dialog-title">
          Thông báo
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Bạn có chắc muốn gỡ bài đăng này?
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            id="reason"
            name="reson"
            label="Lý do"
            fullWidth
            multiline
            rows={4}
            value={currentReport ? currentReport.reason : undefined}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} autoFocus color="primary">
            Không
          </Button>
          <Button onClick={() => handleDeletedJob(currentReport)} autoFocus color="primary">
            Có
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog fullWidth aria-labelledby="customized-dialog-title" open={openUndo}>
        <DialogTitle id="customized-dialog-title">
          Thông báo
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Bạn có đang muốn huỷ thao tác này?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelUndo} autoFocus color="primary">
            Không
          </Button>
          <Button onClick={() => backToPending(currentReport)} autoFocus color="primary">
            Có
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
