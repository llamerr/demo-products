import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import RecipeReviewCard from '../../layout/components/Card/Card';

import data from '../../mocks/data';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className="homepage">
      <div className={classes.root}>
        <Grid container spacing={3}>
          {data.map(item => (
            <Grid item xs>
              <RecipeReviewCard item={item} key={item._id} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
