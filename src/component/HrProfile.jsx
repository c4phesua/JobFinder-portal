import moment from 'moment';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
} from '@material-ui/core';

const user = {
    avatar: 'https://cdn.worldvectorlogo.com/logos/circle-k.svg',
    name: 'Cicle-K',
    address: '62 Đường Man Thiện, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh',
    phone: '028 3730 5852',
    email: ' info@circlek.com.vn'
};

const CompanyProfile = (props) => (
    <Card {...props}>
        <CardContent>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Avatar
                    src={user.avatar}
                    style={{
                        width: 100,
                        height: 100,
                        display:"inline-flex",
                    }}
                />
                <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                >
                    {user.name}
                </Typography>
                <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="body1"
                >
                    {user.address}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body1"
                >
                    {`${user.phone} - ${user.email}`}
                </Typography>
            </Box>
        </CardContent>
        <Divider />
        <CardActions>
            <Button
                color="primary"
                fullWidth
                variant="text"
            >
                Đổi ảnh
            </Button>
        </CardActions>
    </Card>
);

export default CompanyProfile;