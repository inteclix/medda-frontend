import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Select,
  Switch,
  MenuItem,
  FormControl,
  FormControlLabel,
  InputLabel,
  FormHelperText,
  Paper
} from '@material-ui/core';
import {
  DatePicker,
  KeyboardDatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {SingleSelect} from 'react-select-material-ui';


export const FormField = ({ control, errors, field, style }) => {
  if (
    field.type === "text" ||
    field.type === "password" ||
    field.type === "tel"
  ) {
    return (
      <FormControl
        key={index}
        fullWidth
        margin="normal"
        error={Boolean(errors[field.name])}
      >
        <Controller
          as={TextField}
          type={field.type}
          control={control}
          required={field.rules ? true : false}
          name={field.name ? field.name : field.code}
          defaultValue={row ? row[field.name] : ""}
          label={field.label}
          rules={field.rules}
        />
        <FormHelperText>
          {errors[field.name] && errors[field.name].message}
        </FormHelperText>
      </FormControl>
    );
  }
  if (field.type === "number") {
    return (
      <FormControl
        key={index}
        fullWidth
        margin="normal"
        error={Boolean(errors[field.name])}
      >
        <Controller
          as={TextField}
          type={"number"}
          control={control}
          required={field.rules ? true : false}
          name={field.name ? field.name : field.code}
          defaultValue={row ? row[field.name] : ""}
          label={field.label}
          rules={field.rules}
        />
        <FormHelperText>
          {errors[field.name] && errors[field.name].message}
        </FormHelperText>
      </FormControl>
    );
  }
  if (field.type === "list") {
  }
  if (field.type === "date") {
    return (
      <FormControl
        key={index}
        fullWidth
        margin="normal"
        error={Boolean(errors[field.name])}
      >
        <Controller
          as={DatePicker}
          format="DD-MM-YYYY"
          control={control}
          required={field.rules ? true : false}
          name={field.name}
          defaultValue={row ? row[field.name] : new Date()}
          label={field.label}
          rules={field.rules}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormHelperText>
          {errors[field.name] && errors[field.name].message}
        </FormHelperText>
      </FormControl>
    );
  }
  if (field.type === "select" || field.type === "list") {
    return (
      <FormControl
        fullWidth
        margin="normal"
        error={Boolean(errors[field.name])}
        key={index}
      >
        <Controller
          as={SingleSelect}
          name={field.name}
          defaultValue={row ? row[field.name] : ""}
          rules={field.rules}
          control={control}
          options={field.options}
          label={field.label}
        />
        <FormHelperText>
          {errors[field.name] && errors[field.name].message}
        </FormHelperText>
      </FormControl>
    );
  }
  if (field.type === "boolean") {
    return (
      <FormControl fullWidth margin="normal" key={index}>
        <FormControlLabel
          control={
            <Controller
              as={Switch}
              name={field.name}
              defaultValue={row ? row[field.name] : true}
              control={control}
            />
          }
          label={field.label}
        />
      </FormControl>
    );
  }
  return null;
};
