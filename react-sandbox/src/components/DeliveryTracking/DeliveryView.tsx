import { FunctionComponent } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import HistoryIcon from '@material-ui/icons/History';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import What3WordsTextField from './What3WordsTextField';

type DeliveryViewProps = {
    pageTitle: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        deliveryTracking: {
            color: 'secondary',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(2)
            },
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center'
        },
        iconButton: {
            marginRight: theme.spacing(2),
        },
        pageTitle: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        tabs: {
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.main,
        },
        button: {
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.main,
        },
    }),
);

const DeliveryView: FunctionComponent<DeliveryViewProps> = ({ pageTitle }: DeliveryViewProps) => {
    const classes = useStyles();

    return <div className={classes.deliveryTracking}>
        <Paper variant="outlined" square>
            <AppBar color="secondary" position="static">
                <Toolbar>
                    <IconButton className={classes.iconButton} edge="start" color="inherit">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography className={classes.pageTitle} variant="h6" noWrap>
                        {pageTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Typography className={classes.pageTitle} variant="h6" noWrap>
                    {pageTitle}
                </Typography>
                <What3WordsTextField></What3WordsTextField>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<PhoneIcon />}
                >
                    Call Driver
      </Button>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<PersonPinIcon />}
                >
                    Share Location
      </Button>
            </Grid>
            <Tabs color="inherit"
                variant="fullWidth"
                className={classes.tabs}
            >
                <Tab icon={<MyLocationIcon />} label="Track" aria-label="Track" />
                <Tab icon={<HistoryIcon />} label="History" aria-label="History" />
                <Tab icon={<AccountBoxIcon />} label="Account" aria-label="Account" />
            </Tabs>
        </Paper>
    </div>;
}

export default DeliveryView;
