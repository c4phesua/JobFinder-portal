import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

const JobFilter = (props) => {

  return (
    <div>
      <Autocomplete
        id="work filter"
        options={topWork}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Work" variant="outlined" />}
      />
    </div>
  );
}

const topWork = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
];

export default JobFilter;