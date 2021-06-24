import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function JobTypeComboBox() {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            size={"small"}
            style={{ width: '150%',
                }}
            renderInput={(params) => <TextField {...params} label="loại công việc" variant="outlined" />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'Bán thời gian' },
    { title: 'Toàn thời gian' },
];