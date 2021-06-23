import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function LocationComboBox() {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            size={"small"}
            style={{ width: '120%', marginTop: 0}}
            renderInput={(params) => <TextField {...params} label="Vị trí" variant="outlined" />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'Quận 1', },
    { title: 'Quận 2', },
    { title: 'Quận 3', },
    { title: 'Quận 4', },
    { title: 'Quận 5', },
    { title: 'Quận 6', },
    { title: 'Quận 7', },
    { title: 'Quận 8', },
    { title: 'Quận 9', },
    { title: 'Quận 10', },
    { title: 'Quận 11', },
    { title: 'Quận 12', },
    { title: 'Quận Bình Thạnh', },
    { title: 'Quận Thủ Đức', },
    { title: 'Quận Gò Vấp', },
    { title: 'Quận Phú Nhuận', },
    { title: 'Quận Tân Bình', },
    { title: 'Quận Tân Phú', },
    { title: 'Quận Bình Tân', },
    { title: 'Huyện Nhà Bè', },
    { title: 'Huyện Hóc Môn', },
    { title: 'Huyện Bình Chánh', },
    { title: 'Huyện Củ Chi', },
    { title: 'Huyện Cần Giờ', },
];