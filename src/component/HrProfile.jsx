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
import MockupData from '../helper/MockupData';

const { name, image_link, email, phone, address } = MockupData.company[0];

const user = {
    avatar: image_link,
    name: name,
    address: address,
    phone: phone,
    email: email
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
                        display: "inline-flex",
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
        {/* <CardActions>
            <Button
                color="primary"
                fullWidth
                variant="text"
            >
                Đổi ảnh
            </Button>
        </CardActions> */}
    </Card>
);

export default CompanyProfile;