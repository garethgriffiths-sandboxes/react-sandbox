import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import NavBar from './components/NavBar';
import DeliveryView from './components/DeliveryTracking/DeliveryView';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  appBar: {
    backgroundColor: theme.palette.primary[theme.palette.type],
    color: theme.palette.primary.contrastText
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function TabProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const App = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const { classes } = props;

  const handleChange = (event, newTab) => {
    setSelectedTab(newTab);
  };

  const deliveryViewPageTitle = "Help with Directions";

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => (
          <div className={classes.root}>
            <NavBar position="static" className={classes.appBar}>
            </NavBar>
            <AppBar position="static" color="default">
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
              >
                <Tab label="Delivery Tracking" {...TabProps(0)} />
              </Tabs>
            </AppBar>
            <TabPanel value={selectedTab} index={0}>
              <Grid container justify="center" spacing={Number(0)}>
                <Grid item xs={12}>
                  <DeliveryView pageTitle={deliveryViewPageTitle}></DeliveryView>
                </Grid>
              </Grid>
            </TabPanel>
          </div>)} exact />
        <Route path="/delivery-tracking" render={() => <DeliveryView pageTitle={deliveryViewPageTitle}></DeliveryView>} />
      </Switch>
    </BrowserRouter>
  );
};

export default withStyles(styles)(App);
