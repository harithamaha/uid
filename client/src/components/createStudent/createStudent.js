

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AddStudent() {
  const classes = useStyles();
  const [student, setStudent] = useState({
    regId: "",
    name: "",
    course: "",
    section: "",
  });
  const createStudent = () => {
    axios.post("http://localhost:5000/students", student).then(()=>{
      window.location.reload(false);
    })
  };
  return (
    <>
      <h1>Add your data</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Roll no"
          value={student.regId}
          onChange={(event) => {
            setStudent({ ...student, regId: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Name"
          value={student.name}
          onChange={(event) => {
            setStudent({ ...student, name: event.target.value });
          }}
        />
         <TextField
          id="standard-basic"
          label="Gender"
          value={student.gender}
          onChange={(event) => {
            setStudent({ ...student, gender: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Course"
          value={student.course}
          onChange={(event) => {
            setStudent({ ...student, course: event.target.value });
          }}
        />
           <TextField
          id="standard-basic"
          label="Department"
          value={student.department}
          onChange={(event) => {
            setStudent({ ...student, department: event.target.value });
          }}
        />
         <TextField
          id="standard-basic"
          label="Year"
          value={student.year}
          onChange={(event) => {
            setStudent({ ...student, year: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Section"
          value={student.section}
          onChange={(event) => {
            setStudent({ ...student, section: event.target.value });
          }}
        />
         {/* <TextField
          id="standard-basic"
          label="DEPARTMENT"
          value={student.department}
          onChange={(event) => {
            setStudent({ ...student, department: event.target.value });
          }}
        /> */}
        <TextField
          id="standard-basic"
          label="Contact no"
          value={student.phoneno}
          onChange={(event) => {
            setStudent({ ...student, phoneno: event.target.value });
          }}
        />
          <TextField
          id="standard-basic"
          label="Parent's Contact no"
          value={student.pphoneno}
          onChange={(event) => {
            setStudent({ ...student, pphoneno: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Email id"
          value={student.emailid}
          onChange={(event) => {
            setStudent({ ...student, emailid: event.target.value });
          }}
        />
        <Button variant="contained" color="primary" onClick={createStudent}>
          Submit
        </Button>
      </form>
    </>
  );
}