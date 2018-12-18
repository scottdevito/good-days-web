// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import type { RouterLocation } from '../../constants/FlowTypes';

type Props = {
  location: RouterLocation,
  classes: Object,
};

const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
    marginBottom: '56px',
  },
  appBar: {
    background: 'linear-gradient(270deg, #5CB75C 0%, #CCECCC 100%)',
  },
};

function AppBarNav(props: Props) {
  const { classes } = props;
  console.log(props.location);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.appBar}>
          <Typography variant="headline" color="inherit">
            Good Days
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppBarNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarNav);
