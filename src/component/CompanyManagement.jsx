import React from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Switch,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MockupData from '../helper/MockupData';


const CompanyManagement = (props) => {

  const employees = MockupData.employees;

  return (
    <>
      <Card {...props}>
        <CardHeader title="Nhân sự công ty" />
        <Divider />
        <PerfectScrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
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
                      <Switch
                        checked={employee.status}
                        // onChange={}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
      <Button
        color="primary"
        variant="contained"
      >
        Thêm nhân viên
      </Button>
    </>
  )
}

export default CompanyManagement;