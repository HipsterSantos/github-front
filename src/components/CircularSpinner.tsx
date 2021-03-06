import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
        width:"30px"
       
      },
    },
  }),
);

export default function CircularSpinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={{width:'19px',padding:'.2em',height:'23px',color:'#fff'}}/>
    </div>
  );
}