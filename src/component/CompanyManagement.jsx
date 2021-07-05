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
import {IOSSwitch} from "./IosSwitch";


const onCreateButtonClicked = () => {
  // open popup here
}

const CompanyManagement = (props) => {

  const employees = MockupData.employees;
  var initState = {}
  for (const emp of employees) {
    initState[emp.id.toString()] = true
  }
  const [switchState, setSwitchState] = React.useState(initState);
  const handleChange = (event) => {
    console.log(event.target.name)
    setSwitchState({...switchState, [event.target.name]: event.target.checked});
  };

  return (
    <>
      <Card {...props}>
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
                      <IOSSwitch
                          checked={switchState[employee.id.toString()]}
                          onChange={handleChange} name={employee.id.toString()}
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
      <div className="add-hr-btn">
        <Button
          color="primary"
          variant="contained"
          onClick={onCreateButtonClicked}
        >
          Thêm nhân viên
        </Button>
      </div>

    </>
  )
}

export default CompanyManagement;