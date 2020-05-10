import React from "react"
import { Paper, TextField, makeStyles, AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { className } from "postcss-selector-parser";
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1
  },
  form: {
    height: "100%"
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  image: {
    background: "url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)"
  }
}))
export default () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={1} >
      <Grid className={classes.image} xs={8} item>

      </Grid>
      <Grid xs={4} item>
        <Paper className={classes.root}>
          <form className={classes.form}>
            <TextField placeholder="Nom d'utilisateur" />
          </form>
        </Paper></Grid>
    </Grid>
  )
}