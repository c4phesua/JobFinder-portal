import { makeStyles } from '@material-ui/core/styles';

const body = document.body,
  html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

export const cardStyle = makeStyles((theme) => ({
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
