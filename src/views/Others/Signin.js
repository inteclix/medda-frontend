import React from "react"
import { Paper, TextField, makeStyles, Typography, Toolbar, Button, Grid, Box } from "@material-ui/core";
import authenticationSVG from "assets/authentication.svg"
import doctorsSVG from "assets/doctors.svg"

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
    display: "flex",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex:1,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    margin: 0,
    backgroundColor: "#EDEFF2",
    borderBottomLeftRadius: 60,
    borderTopLeftRadius: 60
  },
  authenticationSVG: {
    height: 200,
    margin:theme.spacing(2),
  },
  doctorsSVG: {
    height: 500
  }
}))
export default () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}  >
      <Grid className={classes.left} >
        <img className={classes.doctorsSVG} src={doctorsSVG} />
      </Grid>
      <Grid className={classes.right} xs={5} item>
        <img src={authenticationSVG} className={classes.authenticationSVG} />
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