import { makeStyles } from '@material-ui/core/styles';

const body = document.body,
  html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

export const cardStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: '15px',
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#FFFFCC',
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    // margin: 'auto',
  },
  content: {
    flex: '1 0 auto',
    textAlign: 'left',
  },
  cover: {
    marginTop: 'auto',
    marginBottom: 'auto',
    minWidth: 90 * height / 720,
    minHeight: 90 * height / 720,
    maxWidth: 90 * height / 720,
    maxHeight: 90 * height / 720,
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
