import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import MockupData from '../helper/MockupData';
import SelectFilter from './SelectFilter';

const { WORK_TYPE, WORK_LEVEL, SALARY_LEVEL } = MockupData.data_home_page;


const JobFilter = (props) => {

  return (
    <div className="select-filter">
      <SelectFilter id="work-type" label="Ngành nghề" options={WORK_TYPE} />
      <SelectFilter id="work-level" label="Cấp bậc" options={WORK_LEVEL} />
      <SelectFilter id="work-type" label="Mức lương" options={SALARY_LEVEL} />
    </div>
  );
}


export default JobFilter;