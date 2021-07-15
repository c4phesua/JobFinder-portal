import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import Report from "./Report";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                JobFinder FPT Team
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));


export default function Footer() {
    const classes = useStyles();
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const mockFunction = () => {

    }

    const footers = [
        {
            title: 'Về chúng tôi',
            description: [{content: 'Thông tin', url: mockFunction},
                {content: 'lịch sử', url: mockFunction},
                {content: 'liên hệ', url: mockFunction},
                {content: 'Báo cáo sai phạm', url: handleClickOpenEdit}
            ],
        },
        {
            title: 'Dành cho nhà tuyển dụng',
            description: [{content: 'Đăng tuyển dụng', url: mockFunction},
                {content: 'Quản lý hồ sơ', url: mockFunction},
                {content: 'Sản phẩm dịch vụ khác', url: mockFunction}, {content: 'Liên hệ', url: mockFunction}],
        },
        {
            title: 'Giấy phép',
            description: [{content: 'Điều khoản bảo mật', url: mockFunction}, {content: 'Điều khoản sử dụng', url: mockFunction}],
        },
    ];
    return (
        <React.Fragment>
            {/* Footer */}
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item.content}>
                                        <Link onClick={item.url} variant="subtitle1" color="textSecondary">
                                            {item.content}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
            {/* End footer */}
            <Dialog
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Báo cáo sai phạm
                </DialogTitle>
                <DialogContent>
                    <Report/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={handleCloseEdit} color="primary">
                        Báo cáo
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}