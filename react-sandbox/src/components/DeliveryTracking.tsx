import { FunctionComponent } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import MyLocationIcon from '@material-ui/icons/MyLocation';
import HistoryIcon from '@material-ui/icons/History';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        deliveryTracking: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(2)
            },
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center'
        },
    }),
);

const DeliveryTracking: FunctionComponent<{}> = () => {
    const classes = useStyles();

    return <div className={classes.deliveryTracking}>
        <Paper variant="outlined" square>
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        React Sandbox
                </Typography>
                </Toolbar>
            </AppBar>
            <Tabs
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab icon={<MyLocationIcon />} label="Track" aria-label="Track" />
                <Tab icon={<HistoryIcon />} label="History" aria-label="History" />
                <Tab icon={<AccountBoxIcon />} label="Account" aria-label="Account" />
            </Tabs>
        </Paper>
    </div>;
}

export default DeliveryTracking;
