import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

const SelectFilter = (props) => {

  const {id , label, options} = props;

  return (
    <div>
      <Autocomplete
        id={id}
        options={options}
        getOptionLabel={(option) => option.title}
        defaultValue={options[0]}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
      />
    </div>
  );
}

export default SelectFilter;
