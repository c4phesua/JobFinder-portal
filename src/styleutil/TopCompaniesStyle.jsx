import { makeStyles } from '@material-ui/core/styles';

export const companiesStyle = makeStyles((theme) => ({
  root: {
      display: 'flex',
      marginBottom: '15px',
      backgroundColor: '#f0f2f5',
      '&:hover': {
          backgroundColor: '#FFFFCC',
      }
  },
  details: {
      display: 'flex',
      flexDirection: 'column',
  },
  content: {
      flex: '1 0 auto',
  },
  cover: {
      width: '50%',
  },
  controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
  },
  playIcon: {
      height: 38,
      width: 38,
  },
}));