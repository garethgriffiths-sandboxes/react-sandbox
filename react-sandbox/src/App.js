import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import MapBox from './components/MapBox';
import NavBar from './components/NavBar';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.primary[theme.palette.type],
    color: theme.palette.primary.contrastText
  },
  widget: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4),
  },
  link: {
    color: theme.palette.text.secondary,
  },
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

function a11yProps(index) {
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

  return (
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
          <Tab label="Delivery Tracking" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={selectedTab} index={0}>
        <Grid container justify="center" spacing={Number(0)}>
          <Grid item xs={12}>
            <MapBox />
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
};

export default withStyles(styles)(App);
