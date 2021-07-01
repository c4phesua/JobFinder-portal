import { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField
} from '@material-ui/core';

const AccountProfileDetails = (props) => {
    const [values, setValues] = useState({
        name: 'Cicle-K',
        address: '62 Đường Man Thiện, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh',
        phone: '02837305852',
        email: ' info@circlek.com.vn'
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form
            autoComplete="off"
            noValidate
            {...props}
        >
            <Card>
                <CardHeader
                    subheader="Thông tin dưới đây có thể được thay đổi"
                    title="Hồ sơ công ty"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                helperText="Vui lòng điền đầy đủ tên công ty"
                                label="Tên công ty"
                                onChange={handleChange}
                                required
                                value={values.name}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Địa chỉ"
                                onChange={handleChange}
                                required
                                value={values.address}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Email"
                                onChange={handleChange}
                                required
                                value={values.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Số điện thoại"
                                onChange={handleChange}
                                type="number"
                                value={values.phone}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box
                    style={{
                        height: 40,
                        display:"inline-flex"
                    }}
                >
                    <Button
                        color="primary"
                        variant="contained"
                        size={"small"}
                    >
                        Lưu thông tin
                    </Button>
                </Box>
            </Card>
        </form>
    );
};

export default AccountProfileDetails;