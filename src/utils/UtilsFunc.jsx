import { makeStyles,withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange, red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';


export const useStylesApply = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
}));

export const useStylesJob = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardInfo:{
      display:'flex',
      [theme.breakpoints.up(960)]:{
        textAlign:'left'
      },
      [theme.breakpoints.down(960)]:{
        textAlign:'center',
      }
  },
  cardInfo2:{
      textAlign:'center',
      [theme.breakpoints.up(960)]:{
        textAlign:'right'
      }
  },
  paper: {
    boxShadow: 'none',
    variant:'outlined',
    borderRadius:'20',
    borderColor:red[200],
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export const useStylesProfile = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
}));
export const useStylesHrSignUp = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(1) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(200 + theme.spacing(1) * 2)]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));
  
export const ColorButtonSignUp = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(orange[500]),
        backgroundColor: orange[500],
        '&:hover': {
        backgroundColor: orange[700],
        },
    },
}))(Button);

export const ColorButton = withStyles((theme) => ({
  root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      '&:hover': {
      backgroundColor: red[700],
      },
  },
}))(Button);

export const ColorButtonSearch = withStyles((theme) => ({
  root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      '&:hover': {
      backgroundColor: red[700],
      },
  },
}))(Button);

export function getDate(dateExpire) {
    var temp = dateExpire.split('/');
    dateExpire = temp[1] +'/' + temp[0] +'/' +temp[2];
    var date_expire = new Date(dateExpire);
    var present_date = new Date();

    return Math.round((date_expire.getTime() - present_date.getTime())/(1000*3600*24))


}

export function ListString(props) {
    const listItem = props.items.map((item) => (
      <Typography component="div" variant="body" align='left'>
          {item}
      </Typography>
    )
    );
    return listItem;
}

export function shortString(string, length = 8) {
      var temp = string.split(' ',length);
      let result = temp.join(' ')
      return  string.split(' ').length < length? string: result+"...";
}

export const linkStyle = makeStyles((theme) => ({
  link:{
    color: orange,
    "&:hover": {
      color: orange[500]
    }
  },
})); 




  