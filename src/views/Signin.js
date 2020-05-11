import React from "react"
import { Paper, TextField, makeStyles, Typography, Toolbar, Button, Grid, Box } from "@material-ui/core";
import { className } from "postcss-selector-parser";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1
  },
  textField: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  left: {
    background: "url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)"
  },
  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 5,
  }
}))
export default () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={1} >
      <Grid className={classes.left} xs={7} item>

      </Grid>
      <Grid className={classes.right} display="flex" xs={5} item>
        <Paper
          component={Box}
          display="flex"
          flexDirection="column"
          padding={1}
        >
          <Typography>Connecté avec nom</Typography>
          <Box
            marginBottom={2}
            marginTop={2}
            component="form"
            display="flex"
            flexDirection="column"
            padding={1}
          >
            <TextField className={classes.textField} label="Nom d'utilisateur" />
            <TextField className={classes.textField} label="Mot de pass" type="password" />
            <Button className={classes.textField} primary>Connecté</Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}