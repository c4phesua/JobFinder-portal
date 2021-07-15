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
import { newTab } from "../utils/Routes";
import React from "react";
import { Visibility } from '@material-ui/icons';
import AdminViewReport from './AdminViewReport';



export default function AdminReportMng(props) {
  const handleLinkClick = (event) => {
    newTab(event.target.name);
  }

  const { report_data } = MockupData;

  const [openReport, setOpenReport] = React.useState(false);
  const [report, setReport] = React.useState(null);

  const handleOpenReport = (report) => {
    setReport(report);
    setOpenReport(true);
  };

  const handleCloseReport = () => {
    setOpenReport(false);
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
      <Dialog open={openReport} onClose={handleOpenReport} aria-labelledby="form-dialog-title">
        <DialogContent>
          <AdminViewReport report={report} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReport} color="primary">
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
